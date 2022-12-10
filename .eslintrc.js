module.exports = {
    root: true,
    // parser: '@typescript-eslint/parser',
    plugins: [
        // '@typescript-eslint',
        // 'react',
        // 'react-hooks'
    ],
    extends: [
        'eslint:recommended',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:react/recommended',
        // 'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        // project: './tsconfig.json',
        // ecmaFeatures: {
        //     jsx: true
        // }
    },
    settings: {
        // react: {
        //     version: 'detect'
        // }
    },
    env: {
        browser: true,
    },
    rules: {
        // 'quotes': [ 'error', 'single' ],
        'eqeqeq': [ 'error', 'always' ],
        // 'no-var': 'error',
        'no-var': 'warn',
        // 'semi': [ 'error', 'always' ],
        'semi-style': [ 'error', 'last' ],
        'no-unused-vars': 0,
        // '@typescript-eslint/no-unused-vars': [ 'warn', {
        //     argsIgnorePattern: '^_',
        //     varsIgnorePattern: '^_'
        // } ],
        // '@typescript-eslint/explicit-function-return-type': [ 'error', {
        //     allowExpressions: true
        // } ],
        // '@typescript-eslint/strict-boolean-expressions': [ 'error', {
        //     allowString: false,
        //     allowNumber: false,
        //     allowNullableObject: false
        // } ],
        // 'react/prop-types': 0
    }
};
