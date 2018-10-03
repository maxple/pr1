var path = require('path')

module.exports = {
    context: __dirname, // eslint-disable-line no-undef
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist', 'assets'), // eslint-disable-line no-undef
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // eslint-disable-line no-undef
        publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react'],
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                        },
                    }],
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader', 'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                        },
                    }, 'sass-loader'],
            },
        ],
    },
}
