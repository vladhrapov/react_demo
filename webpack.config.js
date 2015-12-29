var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {                            // entry point for build start
        bundle: [                       // name of bundle and an array for start point
            './src/main.js'
        ]
    },
    output: {
        path: path.join(__dirname, '/public'),    // path to the bundle directory
        filename: '[name].js',                    // name of the file (in our case 'bundle' from entry)
        library: 'app'                            // through it using module methods
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,                          // tests files for loader with extensions
            include: path.join(__dirname, "src"),           // include directories for bundling only my code
            loader: 'babel',                                // babel for compiling (can write babel-loader instead of babel)
            query: {
                presets: ['es2015', 'react']                // dependencies for ES6(syntax) and react(compiling jsx)
            }
        }]
    },
    watch: NODE_ENV == 'development',                         // watch for file changes
    watchOptions: {
        aggregateTimeout: 100                                 // timeout for reload after file changes
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null, // source map for debugging (look on webpack site)
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*', '*-loader'],
        extensions: ['', '.js']
    }
};

if(NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
