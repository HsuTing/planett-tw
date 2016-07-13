var path = require('path');

var ENV = !!(+process.env.NODE_ENV || 0);
var base = ENV ? '/public/js/' : '/planett-tw.github.io/public/js/';
var common = base + 'common.min.js';

module.exports = { 
  entry: {
    'index': {
       path: './base.pug',
       options: {
         context: { path: './dist/button_components/index' },
         js: {
           index: (base + 'index.min.js'),
           common: common
         }
       }   
     }   
  },  
  output: {
    filename: '[name].html',
    path: './'
  }
};
