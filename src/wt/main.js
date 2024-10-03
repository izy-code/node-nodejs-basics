import { join } from 'path';
import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { getModuleDirName } from '../utils.js';

const WORKER_FILE_NAME = 'worker.js';
const FIB_START_NUM = 10;

const __dirname = getModuleDirName(import.meta.url);
const workerFilePath = join(__dirname, WORKER_FILE_NAME);

const initWorkerPromise = (workerData) => new Promise((resolve) => {
    const worker = new Worker(workerFilePath, { workerData });

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
});

const performCalculations = async () => {
    const workerCount = cpus().length;
    const workerPromises = [];

    for (let i = FIB_START_NUM; i < FIB_START_NUM + workerCount; i++) {
        workerPromises.push(initWorkerPromise(i));
    }

    const results = await Promise.all(workerPromises);

    console.log(results);
};

await performCalculations();