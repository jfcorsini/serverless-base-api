module.exports = {
  parser:  '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
};