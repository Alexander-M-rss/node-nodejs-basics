import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const folder = join(__dirname, 'files');

    try {
        const files = await readdir(folder);

        console.log(files);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

await list();