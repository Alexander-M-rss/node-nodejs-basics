const parseEnv = () => {
    const res = Object.entries(process.env)
        .filter((item) => item[0].startsWith('RSS_'))
        .map((item) => `${item[0]}=${item[1]}`)
        .join('; ');

    console.log(res);
};

parseEnv();