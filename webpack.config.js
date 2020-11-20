const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

// import {* as webpack} from "webpack";

module.exports = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
 
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  plugins: [
      new CheckerPlugin()
  ]
  ,
	mode: 'development',
	entry: './angular/src/index.js',
	output: {
		path: path.resolve(__dirname + "/dist"),
		filename: "foo.bundle.js"
		},
  module: {
    rules: [
      {
        test: /\.txt$/, use: "raw-loader",
        test: /\\.css$/, use: "css-loader",
        test: /\\.ts$/, use: "ts-loader",
        loaders: [
          {
            test: /\.tsx?$/,
            loaders: 'awesome-typescript-loader'
          }
        ]
      } 
    ],
  },
};

export default config;