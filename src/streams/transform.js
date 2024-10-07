import { Transform } from 'stream';
import { EOL } from 'os';
import { pipeline } from 'stream/promises';

const reverseTransform = new Transform({
    transform(chunk, _, callback) {
        callback(null, chunk.toString().replace(EOL, '').split('').reverse().join('').concat(EOL));
    },
});

const transform = async () => {
    await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();