import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToWrite = join(__dirname, "files", "fileToWrite.txt");
    const writeStream = createWriteStream(fileToWrite);

    process.stdin.pipe(writeStream);
};

await write();