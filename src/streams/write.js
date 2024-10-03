import { join } from 'path';
import { createWriteStream } from 'fs';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'fileToWrite.txt';

const __dirname = getModuleDirName(import.meta.url);

const write = async () => {
    const filePath = join(__dirname, DIR_NAME, FILE_NAME);
    const outputStream = createWriteStream(filePath, 'utf-8');

    process.stdin.pipe(outputStream);
};

await write();