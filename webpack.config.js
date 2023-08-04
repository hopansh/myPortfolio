const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: __dirname + "/dir",
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(pdf|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env.development.local",
      systemvars: true,
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new ESLintPlugin({
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/_redirects", to: "" }],
    }),
  ],
};
