const webpack = require("webpack");
const process = require('process');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PUBLIC_PATH='/assets/';
const OUTPUT_DIRECTORY = __dirname + `/public/${PUBLIC_PATH}`;

const BABEL_PRESET = {
  loader: 'babel-loader',
  options: {
    presets: ['es2015', 'react'],
    plugins: ['transform-class-properties', 'transform-object-rest-spread'],
  }
};

module.exports = {
    entry: {
      app: "./app/client/app.js",
      style: "./app/stylesheets/style.css"
    },
    output: {
        path: OUTPUT_DIRECTORY,
        filename: `[name].js`,
        publicPath: PUBLIC_PATH,
    },
  
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: BABEL_PRESET },
        { test: /\.jsx?$/, include: /node_modules\/quintype-toddy-libs/, use: BABEL_PRESET },
        { test: /\.(sass|css)$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
          loader: "file-loader",
          query: {
            context: './app/assets',
            name: "[name].[ext]"
          }
        }
      ]
    },
    plugins: [new ExtractTextPlugin({ filename: "[name].css", allChunks: true })
  ]
};
