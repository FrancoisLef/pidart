const { resolve } = require('node:path');

const base = require('./base');

const project = resolve(process.cwd(), 'tsconfig.json');

/**
 * This is a custom ESLint configuration for use with
 * Node.js apps.
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
  env: {
    node: true,
    jest: true,
  },
};
