const parseArgs = () => {
    let res = '';

    process.argv.slice(2)
        .forEach((item, idx, arr) => {
            if (item.startsWith('--')) {
                res += `${item.slice(2)} is ${arr[idx + 1]}, `;
            }
        });
    res = res.slice(0, -2);
    console.log(res);
};

parseArgs();