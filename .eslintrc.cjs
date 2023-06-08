module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    // 'eslint quotes': ["error", "single"],
    'object-curly-spacing': ["error", "always"],
    'react-refresh/only-export-components': 'warn',
    'semi': ["error", "never"],
    'space-in-parens': ["error", "never"],
  },
}
