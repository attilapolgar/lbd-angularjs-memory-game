import path from 'path'
import webpackMerge from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import commonConfig from './webpack.common.config'

export default webpackMerge(commonConfig, {
  devtool: 'eval',
  module: {
    rules: [
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
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './assets/images/favicon.png',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    overlay: true,
    open: true,
    host: 'localhost',
    stats: 'verbose',
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
})
