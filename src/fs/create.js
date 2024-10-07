import { join } from 'path';
import { writeFile } from 'fs/promises';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const CREATED_FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const create = async () => {
    const createdFilePath = join(__dirname, DIR_NAME, CREATED_FILE_NAME);

    try {
        await writeFile(createdFilePath, FILE_CONTENT, { flag: 'wx' });        
    } catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await create();