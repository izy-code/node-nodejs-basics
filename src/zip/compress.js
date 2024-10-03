import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const INPUT_FILE_NAME = 'fileToCompress.txt';
const OUTPUT_FILE_NAME = 'archive.gz';

const __dirname = getModuleDirName(import.meta.url);

const compress = async () => {
    const inputFilePath = join(__dirname, DIR_NAME, INPUT_FILE_NAME);
    const outputFilePath = join(__dirname, DIR_NAME, OUTPUT_FILE_NAME);

    const readStream = createReadStream(inputFilePath);
    const gzipStream = createGzip();
    const writeStream = createWriteStream(outputFilePath);

    readStream
        .pipe(gzipStream)
        .pipe(writeStream);
};

await compress();