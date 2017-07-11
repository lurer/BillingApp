var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, './billingApp');
const DIST_DIR = path.resolve(__dirname, './wwwroot/assets');

//VENDOR_LIBS is the libraries that rarely changes and are put in vendor....js file
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router', 'mobx', 'mobx-react'
];

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  
    entry: {
        //app: ["./wwwroot/app/app.tsx"],
        vendor: VENDOR_LIBS //vendor code (dependencies)
    },
    devtool: PROD ? 'source-map': 'eval',
    output: {
        path: DIST_DIR,
        libraryTarget: "commonjs"
    },
    resolve:{
        extensions:['.js', '.ts', 'jsx', '.tsx'] //remove the need to import using .jsx extensions
    },
    module:{
        rules:[

            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                include: SRC_DIR
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    //Will automatically add all script files generated into an index.html in dist folder
    new HtmlWebpackPlugin({
        template: SRC_DIR +'/index.html' //file used as template
    })
    ]
}

