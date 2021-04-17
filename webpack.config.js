const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const staticExtensions = ['html', 'png', 'svg', 'jpg', 'gif'];

/**
 * @returns {import('webpack').Configuration}
 */
module.exports = (_, { mode }) => ({
    entry: { index: './src/scripts/index.ts' },
    devtool: mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [resolve(__dirname, 'src/scripts')],
                exclude: /\.test\.tsx?$/,
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                include: [resolve(__dirname, 'src/style')],
            },
            {
                test: new RegExp(`\\.(${staticExtensions.join('|')})$`),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: 'src',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'scripts/[name].js',
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style/[name].css', chunkFilename: 'style/[id].css' }),
        new CopyPlugin({
            patterns: staticExtensions.map((extension) => ({
                context: 'src/',
                from: `**/*.${extension}`,
                noErrorOnMissing: true,
            })),
        }),
    ],
});
