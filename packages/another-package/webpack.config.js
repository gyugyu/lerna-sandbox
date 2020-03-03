const path = require('path')
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './lib')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },
  externals: {
    react: 'react'
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
  },
  plugins: [
    new DeclarationBundlerPlugin({
      moduleName: '@gyugyu/another-package',
      out: './index.d.ts'
    })
  ]
}
