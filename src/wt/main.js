import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerPath = join(__dirname, "worker.js");
    const workers = cpus().map((_, idx) => new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData: 10 + idx });
        worker.on('message', resolve);
        worker.on('error', reject);
    }));

    const results = (await Promise.allSettled(workers)).map((resp) => {
        if (resp.status === 'fulfilled') {
            return { status: 'resolved', data: resp.value };
        }
        return { status: 'error', data: null };
    });
    console.log(results);
};

await performCalculations();

// worker.on('message', (data) => resolve(results.push({ status: 'resolved', data: data })));
// worker.on('error', (data) => resolve(results.push({ status: 'error', data: null })));