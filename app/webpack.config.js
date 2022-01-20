const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: 'production',
        entry: {
            'main' : './src/Index.tsx',
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: (env.WEBPACK_WATCH | env.WEBPACK_SERVE) ? '[name].bundle.js' : '[name].[chunkhash].bundle.js',
            publicPath: env.WEBPACK_SERVE ? '' : './dist',
            clean: true
        },

        resolve: {
            modules: ['node_modules'],
            alias: {
                src: path.resolve(__dirname, 'src')
            },
            extensions: ['.js', '.ts', '.tsx'],
        },

        module: {
            rules: [{
                oneOf: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /(node_modules|bower_components)/,
                        include: [path.resolve(__dirname, 'src')],
                        use: [
                            {
                                loader: 'ts-loader',
                                options: {
                                    transpileOnly: (env.WEBPACK_WATCH | env.WEBPACK_SERVE),
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/,

                        use: [
                            {
                                loader: 'style-loader',
                                options: {
                                    esModule: true,
                                    modules: {
                                        namedExport: true,
                                    }
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    esModule: true,
                                    modules: {
                                        namedExport: true,
                                    }
                                }
                            }
                        ]
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        type: 'asset/resource'
                    },
                    // Fonts and SVGs
                    {
                        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                        type: 'asset/inline',
                    },
                    // {
                    //   exclude: /\.ejs$/,
                    //   type: 'javascript/auto'
                    // },
                ]
            }]
        },

        optimization: {
            splitChunks: {
                chunks: 'all',
            }
        },

        plugins: env.WEBPACK_SERVE ?
            [
                new HtmlWebPackPlugin({
                    template: '../static/template.html',
                })
            ]
            :
            [
                new HtmlWebPackPlugin({
                    template: '../static/template.html'
                })
            ]
        ,

        devServer: {
            static: path.resolve(__dirname, '../'),
            compress: true,
            port: 8123
        }
    }
};
