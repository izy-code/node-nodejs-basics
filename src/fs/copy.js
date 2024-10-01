import { join } from 'path';
import { cp } from 'fs/promises';
import { getModuleDirName, isPathAccessible } from '../utils.js';

const SOURCE_DIR_NAME = 'files';
const COPY_DIR_NAME = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = getModuleDirName(import.meta.url);

const copy = async () => {
    const sourceDirPath = join(__dirname, SOURCE_DIR_NAME);
    const copyDirPath = join(__dirname, COPY_DIR_NAME);
    const isCopyDirExists = await isPathAccessible(copyDirPath);

    if (isCopyDirExists) {
        throw new Error(ERROR_MESSAGE);
    }

    try {
        await cp(sourceDirPath, copyDirPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGE);
        } else {
            throw new Error(err);
        }
    }
};

await copy();
