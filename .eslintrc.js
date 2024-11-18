module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        // 'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        // 'i18next',
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': ['warn', {
            varsIgnorePattern: '^_', // Игнорирует переменные, начинающиеся с '_'
            argsIgnorePattern: '^_', // Игнорирует параметры функций, начинающиеся с '_'
        }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'import/extensions': ['error', 'never', {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
            svg: 'always',
            async: 'always',
        }],
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
