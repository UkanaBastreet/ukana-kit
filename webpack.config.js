const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
      // {
      //   test: /\.module.scss/,
      //   use:[
      //     { loader: "style-loader" },
      //   ]
      // }
    ],
  },
};
