const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/script.ts"),  // 👈 add this
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  // loaders, plugins etc.
};
