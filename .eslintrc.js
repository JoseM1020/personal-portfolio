module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',

    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'prettier/prettier': 'error',
        'no-console': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-filename-extension': 'off', // disable if necessary
        'react/static-property-placement': 'off', // disable if necessary
        'react/jsx-props-no-spreading': 'off', // disable if necessary
        'react/require-default-props': 'off',
    },
    parser: 'babel-eslint'
};