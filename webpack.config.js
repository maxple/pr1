var path = require('path')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          }],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          }, 'sass-loader'],
      },
    ],
  },
}
