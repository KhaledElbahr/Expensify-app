const path = require('path');
// entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.s?[ac]ss$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    { loader: 'css-loader' },
                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ],
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
};