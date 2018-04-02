import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import commonConfig from './webpack.common.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import path from 'path'

export default webpackMerge(commonConfig, {
  entry: {
    vendor: ['angular', 'angular-ui-router', 'lodash'],
    app: ['./app/app.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['ng-annotate-loader', 'babel-loader'],
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'less-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['/dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash].js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      beautify: false,
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './assets/images/favicon.png',
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
      },
    }),
  ],
})
