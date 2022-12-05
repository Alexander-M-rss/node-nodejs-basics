import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files/fresh.txt');

    try {
        await writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    }
    catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

await create();