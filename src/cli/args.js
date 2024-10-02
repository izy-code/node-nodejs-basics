const ADDITIONAL_CLI_ARGS_START = 2
const INDEX_OFFSET = 2;
const PREFIX_LENGTH = 2;

const parseArgs = () => {
    const args = process.argv.slice(ADDITIONAL_CLI_ARGS_START);
    const formattedArgPairs = [];

    for (let i = 0; i < args.length; i += INDEX_OFFSET) {
        formattedArgPairs.push(`${args[i].slice(PREFIX_LENGTH)} is ${args[i + 1]}`);
    }

    console.log(formattedArgPairs.join(', '));
};

parseArgs();