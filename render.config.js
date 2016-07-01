var path = require('path');

var base = '/develop/example/public/js/';
var common = base + 'common.min.js';

module.exports = { 
  entry: {
    'button': {
       path: './base.pug',
       options: {
         context: { path: './dist/button_components/index' },
         js: {
           index: (base + 'button.min.js'),
           common: common
         }
       }   
     }   
  },  
  output: {
    filename: '[name].html',
    path: './html'
  }
};
