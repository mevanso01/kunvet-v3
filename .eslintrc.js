// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  'rules': {
    'no-console': 0,
    'no-multi-spaces': 0,
    'quote-props': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    'no-var': 0,
    'vars-on-top': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js'],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-restricted-syntax': 0,
    'no-iterator': 0,
    'no-param-reassign': ['error', {'props': false}],
  },
  'globals': {
    config: true,
  },
}
