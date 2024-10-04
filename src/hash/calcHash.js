import { join } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';
import { getModuleDirName } from '../utils.js';

const DIR_NAME = 'files';
const FILE_NAME = 'fileToCalculateHashFor.txt';
const ALGORITHM = 'sha256';
const ENCODING = 'hex';

const __dirname = getModuleDirName(import.meta.url);

const calculateHash = async () => {
    const filePath = join(__dirname, DIR_NAME, FILE_NAME);
    const inputStream = createReadStream(filePath);
    const hashStream = createHash(ALGORITHM).setEncoding(ENCODING);

    await pipeline(inputStream, hashStream, process.stdout, { end: false });
    console.log(EOL);
};

await calculateHash();