const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('[name].css', {
    allChunks: true,
    disable: false
});

module.exports = {
    entry: {
        vendor: [
            "echarts",
            "es5-shim",
            "es5-shim/es5-sham",
            'react',
            'react-dom',
            'react-router',
        ]
    },
    output: {
        path: path.join(__dirname, './static'),
        filename: 'dll.[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: '[name]-manifest.json',
            name: '[name]',
            context: __dirname
        }),
        new BundleAnalyzerPlugin({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
            analyzerMode: 'server',
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 8889,
            //  路径捆绑，将在`static`模式下生成的报告文件。
            //  相对于捆绑输出目录。
            reportFilename: 'report.html',
            //  模块大小默认显示在报告中。
            //  应该是`stat`，`parsed`或者`gzip`中的一个。
            //  有关更多信息，请参见“定义”一节。
            defaultSizes: 'parsed',
            //  在默认浏览器中自动打开报告
            openAnalyzer: true,
            //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false,
            //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            //  相对于捆绑输出目录。
            statsFilename: 'stats.json',
            //  stats.toJson（）方法的选项。
            //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
            //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
        })
    ],
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            loaders: ['babel-loader?cacheDirectory'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)\??.*$/,
            loader: 'url-loader?limit=8192&name=images/[hash:5].[name].[ext]'
        }, {
            test: /\.(css|less)$/,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }]
    }
}