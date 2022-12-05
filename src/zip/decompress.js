import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import {  pipeline } from 'stream/promises';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourcePath = join(__dirname, "files", "archive.gz");
    const destinationPath = join(__dirname, "files", "fileToCompress.txt");
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    const gunzip = createGunzip();

    await pipeline(source, gunzip, destination);
};

await decompress();