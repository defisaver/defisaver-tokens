const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/index.js',
  output: {
    library: 'defisaver-tokens',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'umd'),
    filename: 'index.js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  externals: ["react", "decimal.js"],
};
