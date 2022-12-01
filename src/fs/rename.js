import { rename as fsRename, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const folderPath = join(__dirname, 'files');
    const properFilePath = `${folderPath}/properFilename.md`;

    try {
        const stats = await stat(properFilePath);
        if (stats) {
            throw new Error('FS operation failed');
        }
    }
    catch(err)
    {
        if(err.code !== 'ENOENT') {
            throw err;
        }
    }

    try {
        await fsRename(`${folderPath}/wrongFilename.txt`, properFilePath);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

await rename();