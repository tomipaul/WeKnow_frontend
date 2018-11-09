const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8000,
        filename: 'bundle.js',
        historyApiFallback: true,
        hot: true,
        index: './src/index.html',
        open: true,
        publicPath: '/src/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    }
}