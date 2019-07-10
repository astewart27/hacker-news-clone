const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.jsx?$/, use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/react']
                  }
                }
              ]},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}