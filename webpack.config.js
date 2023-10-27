const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/scripts/page.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
},

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html'
    }),
  ],
};