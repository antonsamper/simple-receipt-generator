import path from 'node:path';

const lint = (filenames) => `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const commands = {
    '*.{js,jsx,ts,tsx}': [lint],
};

export default commands;
