const path = require('path');

module.exports = {
  mode: 'development', // Or set to 'production'
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  externals: {
    fs: 'commonjs2 fs',
    electron: 'commonjs2 electron',
    // Add other modules if needed
  },
  // q: where would I add resolve: { fallback: { fs: false } } in this file?
  resolve: {
    fallback: {
      fs: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
