// q: in console of npm start, I get this error: Cannot find module 'fs'. How do I fix this?


const path = require('path');
const { electron } = require('process');

module.exports = {
  mode: 'development', // Or set to 'production'
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'electron-main',
  externals: ['electron', 'fs'],
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