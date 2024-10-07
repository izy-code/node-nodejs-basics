import { join } from 'path';
import { rename as fsRename } from 'fs/promises';
import { getModuleDirName, isPathAccessible } from '../utils.js';

const DIR_NAME = 'files';
const OLD_FILE_NAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const rename = async () => {
    const oldFilePath = join(__dirname, DIR_NAME, OLD_FILE_NAME);
    const newFilePath = join(__dirname, DIR_NAME, NEW_FILE_NAME);
    const isNewFileExists = await isPathAccessible(newFilePath);

    if (isNewFileExists) {
        throw new Error(ERROR_MESSAGE);
    }

    try {
        await fsRename(oldFilePath, newFilePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await rename();