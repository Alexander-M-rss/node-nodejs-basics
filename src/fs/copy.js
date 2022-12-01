import { readdir, mkdir, copyFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourceFolder = join(__dirname, 'files');
    const targetFolder = `${sourceFolder}_copy`;

    try {
        const files = await readdir(sourceFolder);

        await mkdir(targetFolder);
        files.forEach((file) => copyFile(`${sourceFolder}/${file}`,`${targetFolder}/${file}`));
    }
    catch (err) {
        if (err.code === 'EEXIST' || err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    }
};

copy();