import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        main: './index.ts',
        auth: './auth.ts',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/build/'),
    },
};

export default config;
