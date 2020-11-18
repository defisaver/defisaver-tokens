module.exports = {
  mode: "none",
  entry: './index',
  output: {
    library: 'defisaver-tokens',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  externals: {
    "react": "react",
    "decimal.js": "decimal.js"
  },
};
