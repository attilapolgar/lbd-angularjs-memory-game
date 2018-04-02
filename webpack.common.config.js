import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  context: path.resolve(__dirname, './src'),
  entry: ['./app/app.js'],
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(ttf|eot|svg|woff2?)$|\?/,
        loader: 'url-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|ico|gif)$/,
        use: ['url-loader?limit=20480', 'img-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
