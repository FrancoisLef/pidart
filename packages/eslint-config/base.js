/**
 * This is a custom ESLint base configuration
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sort-keys-fix',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    /**
     * TypeScript ESLint
     */
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    /**
     * Simple Import Sort
     */
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    /**
     * Sort Keys Fix
     */
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
