import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const scriptPath = join(__dirname, 'files', 'script.js');

    fork(scriptPath, args, { stdio: [process.stdin, process.stdout, 'ipc'] });
};

spawnChildProcess(process.argv.slice(2));
