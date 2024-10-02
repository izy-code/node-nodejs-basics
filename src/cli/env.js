import { env } from 'process';

const PREFIX = 'RSS_';

const noPrefixedVarsMessage = `No environment variables with prefix "${PREFIX}" found`;

const parseEnv = () => {
    const prefixedEnvEntries = Object.entries(env).filter(([key]) => key.startsWith(PREFIX));

    if (prefixedEnvEntries.length) {
        const result = prefixedEnvEntries.map(([key, value]) => `${key}=${value}`).join('; ');

        console.log(result);
    } else {
        console.log(noPrefixedVarsMessage);
    }
};

parseEnv();