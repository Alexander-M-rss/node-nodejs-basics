import { EOL } from 'os';
import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform( chunk, encoding, callback) {
            try {
                callback(null, chunk.toString().trim().split('').reverse().join('') + EOL);
            }
            catch(err) {
                callback(err);
            }
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();