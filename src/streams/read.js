import { join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'fileToRead.txt';

const __dirname = getModuleDirName(import.meta.url);

const read = async () => {
    const filePath = join(__dirname, DIR_NAME, FILE_NAME);
    const inputStream = createReadStream(filePath, 'utf-8');

    await pipeline(inputStream, process.stdout, { end: false });
    console.log(EOL);
};

await read();