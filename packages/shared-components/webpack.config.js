const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: "./index",
  output: {
    filename: "lib/index.js",
    library: ["shared-components"],
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react",
    },
  },
};
