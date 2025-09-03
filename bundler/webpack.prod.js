const path = require("path");

module.exports = {
  // ... your entry, loaders etc.
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),  // 👈 important
    clean: true,  // optional: cleans old files
  },
};
