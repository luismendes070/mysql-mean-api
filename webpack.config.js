const path = require('path');

module.exports = {
  entry: {
    app: ".angular/src/app.js",
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\\.css$/, use: "css-loader" },
      { test: /\\.ts$/, use: "ts-loader" },
    ],
  },
};