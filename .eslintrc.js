module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react-native/no-inline-styles': 'off',
    'global-require': 'off',
    'no-undef': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-throw-literal': 'off',
    'no-shadow': 'off',
  },
};
