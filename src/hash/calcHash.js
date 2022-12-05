import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");
    try {
        const data = await readFile(filePath, {encoding: 'utf8'});
        const hashSum = createHash('sha256');

        hashSum.update(data);
        console.log(hashSum.digest('hex'));

    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }

};

await calculateHash();