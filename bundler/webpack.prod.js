const path = require("path");

module.exports = {
  mode: "production", // 👈 important, removes the warning
  entry: path.resolve(__dirname, "../src/script.ts"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"], // 👈 allows importing TS without extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
