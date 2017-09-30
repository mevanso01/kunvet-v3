// http://eslint.org/docs/user-guide/configuring

module.exports = {
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.config.server.js',
      }
    }
  },
}
