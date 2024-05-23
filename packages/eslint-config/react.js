const { resolve } = require('node:path');

const base = require('./base');

const project = resolve(process.cwd(), 'tsconfig.json');

/**
 * This is a custom ESLint configuration for use with
 * React apps.
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ...base,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [...base.extends, 'plugin:react-hooks/recommended'],
  plugins: [...base.plugins, 'react-refresh'],
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    ...base.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'], // Side effects imports
          ['^react', '^@?\\w'], // React first then packages imports
          ['^assets/?'], // Static assets (fonts)
          // ['^core/?'], // Core components (design system)
          // [
          //   // Order imports from src
          //   '^config/?',
          //   '^types/?',
          //   '^helpers/?',
          //   '^hooks/?',
          //   '^providers/?',
          //   '^theme/?',
          //   '^pages/?',
          //   '^components/?',
          // ],
          ['^../', '^./'],
        ],
      },
    ],
  },
};
