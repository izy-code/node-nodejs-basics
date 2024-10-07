import { join } from 'path';
import { readFile } from 'fs/promises';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'fileToRead.txt';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const read = async () => {
    const filePath = join(__dirname, DIR_NAME, FILE_NAME);

    try {
        const data = await readFile(filePath, 'utf8');

        console.log(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await read();