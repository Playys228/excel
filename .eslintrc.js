module.exports = {
  env: {
    es2021: true,
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersions': 2022,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
  },

  extends: ['eslint:recommended', 'google'],

  rules: {
    'semi': 'off',
    'comma-dagnle': 'off',
    'require-jsdoc': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'operator-linebreak': 'off',
  },


  parser: "@babel/eslint-parser",


}
