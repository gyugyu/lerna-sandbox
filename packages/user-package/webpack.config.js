const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)/,
        use: [{
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.build.json' }
        }]
      }
    ]
  }
}
