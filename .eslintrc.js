module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'react-app',
    'react-app/jest',
    'standard',
    'standard-typescript',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['*.json', '.eslintrc.js'],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  }
}
