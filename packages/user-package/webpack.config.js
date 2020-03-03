const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)/,
        use: [{
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.build.json' }
        }]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  }
}
