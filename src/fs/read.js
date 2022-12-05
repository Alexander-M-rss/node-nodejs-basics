import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRead = join(__dirname, "files", "fileToRead.txt");

    try {
        const data = await readFile(fileToRead, {encoding: 'utf8'});

        console.log(data);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

await read();