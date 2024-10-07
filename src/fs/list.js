import { join } from 'path';
import { readdir } from 'fs/promises';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const list = async () => {
    const dirPath = join(__dirname, DIR_NAME);

    try {
        const dirents = await readdir(dirPath, { withFileTypes: true });
        const fileNames = dirents.filter(dirent => dirent.isFile()).map(file => file.name);

        console.log(fileNames);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await list();