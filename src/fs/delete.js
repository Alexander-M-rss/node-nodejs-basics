import { rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRemove = join(__dirname, "files", "fileToRemove.txt");

    try {
        await rm(fileToRemove);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

await remove();