/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:cypress/recommended',
  ],
  plugins: [
    'cypress',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ["**/*.config.js"],
  rules: {
    'vue/multi-word-component-names': 'off',
    'cypress/no-unnecessary-waiting' : 'off'
  },
}
