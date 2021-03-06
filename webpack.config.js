const path = require('path');

module.exports = {
  entry: './src/snake_game.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  watch: true,
  output: {
    filename: 'snake.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};
