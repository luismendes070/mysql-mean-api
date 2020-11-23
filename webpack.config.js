const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  // Source maps support ('inline-source-map' also works)
  devtool: "source-map",
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Progressive Web Application",
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "foo.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
        test: /\\.css$/,
        use: "css-loader",
        test: /\\.ts$/,
        use: "ts-loader",
        loaders: [
          {
            test: /\.tsx?$/,
            loaders: "awesome-typescript-loader",
          },
        ],
      },
    ],
  },
};

// export default config;
