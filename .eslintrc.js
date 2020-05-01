module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['prettier', 'plugin:vue/essential', '@vue/prettier'],
  rules: {
    'prettier/prettier': ['error'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
