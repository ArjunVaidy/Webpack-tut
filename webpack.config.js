const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    devtool:'source-map',
    module: {
        rules: [
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader : 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins:[new MiniCssExtractPlugin()],
    devServer: {
        static:"./dist",
        hot:true
    }
}
