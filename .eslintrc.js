module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: 'eslint-config-egg',
  globals: {
    Vue: true
  },
  rules: {
    'no-console': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'dot-location': [2, 'property'],
    'comma-dangle': [2, 'never'],
    'no-empty': 0,
    'eol-last': 0,
    'no-multi-spaces': 2,
    'object-shorthand': 0,
    'operator-linebreak': 0,
    'no-unused-vars': [2, {
      args: 'none'
    }],
    'no-use-before-define': 0,
    'func-names': 0,
    'no-new': 0,
    'space-before-function-paren': 0,
    'semi': 0,
    'no-mixed-operators': 0,
    'vue/no-parsing-error': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    'no-return-await': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': 0,
    'no-undef': 0,
    'quotes': 0,
    'lines-between-class-members': 0,
    'handle-callback-err': 0,
    'no-useless-computed-key': 0,
    'no-useless-escape': 0,
    'prefer-promise-reject-errors': 0,
    'no-console': 1,
    'no-throw-literal': 0,
    'no-useless-catch': 0,
    'array-bracket-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
