/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    printWidth: 160,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};

export default config;
