import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import {  pipeline } from 'stream/promises';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourcePath = join(__dirname, "files", "fileToCompress.txt");
    const destinationPath = join(__dirname, "files", "archive.gz");
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    const gzip = createGzip();

    await pipeline(source, gzip, destination);
};

await compress();