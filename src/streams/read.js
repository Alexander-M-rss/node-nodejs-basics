import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRead = join(__dirname, "files", "fileToRead.txt");
    const readStream = createReadStream(fileToRead);

    readStream.on('error', (err) => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }).pipe(process.stdout);
};

await read();