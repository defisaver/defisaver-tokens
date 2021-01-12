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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react',
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
      },
    ]
  },
  externals: ["react", "decimal.js"],
};
