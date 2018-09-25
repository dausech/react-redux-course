var path = require('path')
//var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      //path: path.resolve(__dirname, './.env'),
      //systemvars: true   
      //path: './.env', // Path to .env file (this is the default)
      //safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
