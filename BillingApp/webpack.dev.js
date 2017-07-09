var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

const SRC_DIR = path.resolve(__dirname, './billingApp');
const DIST_DIR = path.resolve(__dirname, './wwwroot/assets');


config.entry.app = [
    SRC_DIR +'/ts/app.tsx', 
    SRC_DIR + '/css/scss/main.scss'
]

// config.output.publicPath = '/static/';
config.output.filename = '[name].js' //will make one file per entry point, using its name

config.devServer = {
    // contentBase: '/static/',//DIST_DIR,
    publicPath: '/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    // proxy: {
    //   '**': {
    //     target: SERVER,
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  }

  config.module.rules.push({
    use:['style-loader', 'css-loader', 'sass-loader'],
    test: /\.scss$/
})

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
)

module.exports = config;