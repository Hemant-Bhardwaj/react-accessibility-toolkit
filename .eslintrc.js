module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'react/prop-types': 'off',
    },
  };
  