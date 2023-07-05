const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
// const appDirectory = __dirname;
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = () => {
  return {
    entry: resolveApp('src/index.tsx'),
    output: {
      path: resolveApp('/dist'),
      filename: 'bundle.js',
    },
    mode: 'development',
    // resolve: dependency graph 생성할 때 import 구문의 경로에 대한 설정들
    resolve: {
      // modules 에 적힌 경로부터 시작해서 import 구문에 적혀있는 경로를 탐색한다.
      modules: ['src', 'node_modules'],
      alias: {
        Images: resolveApp('./src/assets/images'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      preferRelative: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js',
            to: '[name][ext]',
          },
          {
            from: 'node_modules/@ricky0123/vad-web/dist/*.onnx',
            to: '[name][ext]',
          },
          {
            from: 'node_modules/onnxruntime-web/dist/*.wasm',
            to: '[name][ext]',
          },
        ],
      }),
      new ProvidePlugin({
        React: 'react',
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
