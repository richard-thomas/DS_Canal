const webpack = require('webpack'); // Access built-in webpack plugins

module.exports = {
  //mode: 'development',
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    static: './dist'
  },
  resolve: {
    fallback: {
      fs: false,
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "buffer": false
    },
    modules: ['dist', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      }
    ],
  },
  experiments: {
    // Used by loadGpkg.js to load sql.js
    asyncWebAssembly: true
  }
};
