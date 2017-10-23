'use strict';

module.exports = {
  context: __dirname,
  devServer: {
    historyApiFallback: {
      { from: '/JobDetail/*', to: '/' },
    }
  }
};
