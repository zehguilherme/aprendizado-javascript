/* eslint-disable no-path-concat */

const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', './src/main.js'], // arquivo principal
  // para qual lugar deve-se enviar o código convertido do ES6, ES7, etc
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    // caminho no qual deve abrir o servidor da aplicação
    contentBase: path.resolve(__dirname, './public')
  },
  module: {
    // como webpack deve se comportar quando usuario tentar importar novos arquivos .js (babel é executado automaticamente)
    rules: [
      {
        test: /\.m?js$/, // busca se arquivo termina com .js
        exclude: /(node_modules|bower_components)/, // exclui a pasta node_modules e bower_components
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  }
}
