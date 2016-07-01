var path = require('path');
var webpack = require('webpack');

var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = {
    entry: {
      index: './src/index',
      common: [
        './node_modules/react/react.js',
        './node_modules/react-dom/index.js',
        './node_modules/react-router/lib/index.js'
      ]
    },
    output: {
        filename: '[name].min.js',
        path: './public/js/'
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: ENV ? [ 
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ] : [
    ]
}
