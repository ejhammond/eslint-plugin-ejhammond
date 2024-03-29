module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  extends: [
    // start with the base-recommended rules
    'eslint:recommended',
    // adjusts the eslint:recommended rules to work with TS
    'plugin:@typescript-eslint/eslint-recommended',
    // adds recommended rules for TS
    'plugin:@typescript-eslint/recommended',
    // adds linting for import statements
    'plugin:import/errors',
    'plugin:import/warnings',
    // extends import-linting with support for TypeScript imports
    'plugin:import/typescript',
    // extends the prettier config (disables base eslint rules so they don't conflict with prettier)
    // enables the prettier plugin (enables eslint detecting prettier errors)
    // sets the "prettier/prettier" rule to "error" (enables red-highlighting of prettier errors)
    'plugin:prettier/recommended',
  ],
  rules: {
    // throws false positives when used with typescript
    'no-unused-vars': 'off',
    // allow typescript to infer return type of function
    '@typescript-eslint/explicit-function-return-type': 'off',
    // do not require marking class methods with 'public'/'private'
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // allow empty interfaces for semantic/placeholder purposes
    '@typescript-eslint/no-empty-interface': 'off',
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts', '*.spec.jsx', '*.spec.tsx'],
      env: {
        'jest/globals': true,
      },
      extends: [
        // adds linting for jest
        'plugin:jest/recommended',
      ],
      rules: {
        // tries to type-check the first arg for `describe` but doesn't allow string-typed variables :eye_roll:
        // let's leave the type-checking to TypeScript
        'jest/valid-describe': 'off',
      },
    },
    {
      files: ['*rc.js', '*.config.js'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
