import { join } from 'path';
import { unlink } from 'fs/promises';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'fileToRemove.txt';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const remove = async () => {
    const filePath = join(__dirname, DIR_NAME, FILE_NAME);

    try {
        await unlink(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await remove();