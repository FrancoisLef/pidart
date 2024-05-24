module.exports = {
  extends: ['@pidart/eslint-config/react', 'plugin:storybook/recommended'],
  root: true,
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  env: {
    'vitest-globals/env': true,
  },
};
