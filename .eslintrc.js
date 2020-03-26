module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',

    // Uncomment for React
    // 'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  globals: {
    Promise: true,
  },
  rules: {
    'import/no-unresolved': 'off',
    'sort-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
      },
    ],

    // Uncomment for React
    // 'react/boolean-prop-naming': 'error',
    // 'react/function-component-definition': 'error',
    // 'react/no-danger': 'error',
    // 'react/no-deprecated': 'error',
    // 'react/no-set-state': 'error',
    // 'react/no-string-refs': 'error',
    // 'react/no-this-in-sfc': 'error',
    // 'react/no-typos': 'error',
    // 'react/no-unsafe': 'error',
    // 'react/no-unused-prop-types': 'error',
    // 'react/no-unused-state': 'error',
    // 'react/prefer-read-only-props': 'error',
    // 'react/prefer-stateless-function': 'error',
    // 'react/jsx-key': 'error',
    // 'react/jsx-no-duplicate-props': 'error',
    // 'react/jsx-no-target-blank': 'error',
    // 'react/jsx-no-undef': 'error',
    // 'react/jsx-no-script-url': 'error',
    // 'react/jsx-sort-props': 'error',
    // 'react/jsx-pascal-case': 'error',
    // 'react/jsx-boolean-value': 'error',
    // 'react/jsx-handler-names': 'warn',
  },
}
