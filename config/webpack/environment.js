const {environment} = require('@rails/webpacker');
const webpack = require('webpack');

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    BabelPluginEmotion: 'babel-plugin-emotion',
  }),
);

module.exports = environment;
