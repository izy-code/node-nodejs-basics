import { join } from 'path';
import { fork } from 'child_process';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'script.js';

const __dirname = getModuleDirName(import.meta.url);
const filePath = join(__dirname, DIR_NAME, FILE_NAME);

const spawnChildProcess = async (args) => {
    const child = fork(filePath, args);    

    child.on('close', (code) => {
        console.log(`The child process exited with code ${code}, so terminating the master process as well`);
        process.exit(0);
    });
};

// Test the functionality by passing some arguments
spawnChildProcess(['arg1', 'arg2', 'arg3']);