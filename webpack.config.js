const path = require('path');
import * as webpack from "webpack";

module.exports = {
	mode: 'development',
	entry: './angular/src/index.js',
	output: {
		path: path.resolve(__dirname + "/dist"),
		filename: "foo.bundle.js"
		},
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\\.css$/, use: "css-loader" },
      { test: /\\.ts$/, use: "ts-loader" },
    ],
  },
};

export default config;