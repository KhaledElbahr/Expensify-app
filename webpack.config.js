const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === 'production';

const prodPlugins = [
    new MiniCssExtractPlugin({
        filename: "styles.css"
    })
    // new OptimizeCssAssetsPlugin({
    //     assetNameRegExp: /\.optimize\.css$/g,
    //     cssProcessor: require('cssnano'),
    //     cssProcessorOptions: { discardComments: { removeAll: true } },
    //     canPrint: true
    // })
];

module.exports = (env) => {
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        optimization: {
            minimizer: prodPlugins,
        },
        plugins: prodPlugins,
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
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
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
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-map' : 'inline-source-map',
    };
}