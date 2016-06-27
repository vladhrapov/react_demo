import path from "path";
import webpack from "webpack";

let NODE_ENV = process.env.NODE_ENV || 'development';

export default {
    noInfo: false,
    entry: {                            // entry point for build start
        bundle: [                       // name of bundle and an array for start point
          'eventsource-polyfill', // necessary for hot reloading with IE
          'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
          './src/main'
        ]
    },
    target: 'web',
    output: {
        publicPath: '/public/',
        path: path.join(__dirname, '/public'),    // path to the bundle directory
        filename: '[name].js',                    // name of the file (in our case 'bundle' from entry)
        library: 'app'                            // through it using module methods
    },
    devServer: {
      contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
            test: /(\.jsx|\.js)$/,                          // tests files for loader with extensions
            include: path.join(__dirname, "src"),           // include directories for bundling only my code
            loader: 'babel',                                // babel for compiling (can write babel-loader instead of babel)
            query: {
                presets: ['es2015', 'react']                // dependencies for ES6(syntax) and react(compiling jsx)
            }
        },
        {test: /(\.css)$/, loaders: ['style', 'css']},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
      ]
    },
    watch: NODE_ENV == 'development',                         // watch for file changes
    watchOptions: {
        aggregateTimeout: 100                                 // timeout for reload after file changes
    },
    devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : null, // source map for debugging (look on webpack site)
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
