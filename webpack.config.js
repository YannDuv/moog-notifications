const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const DESTINATION = path.resolve(__dirname, 'public');

module.exports = {
  devServer: {
    contentBase: DESTINATION,
    disableHostCheck: true,
  },
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  mode: 'production',
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        test: /\.ts$/,
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./src/theme.scss";',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DESTINATION,
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
  },
};
