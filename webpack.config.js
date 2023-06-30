const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
// const appDirectory = __dirname;
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = (env, argv) => {
  return {
    entry: resolveApp('src/index.tsx'),
    output: {
      path: resolveApp('dist'),
      filename: 'bundle.js',
    },
    mode: 'development',
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: ['babel-loader', 'ts-loader'] },
      ]
    },
    devServer: {
      hot: true,
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ProvidePlugin({
        React: 'react',
      }),
      new HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ]
  }
}