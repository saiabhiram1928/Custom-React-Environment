const path  = require('path')
require('dotenv').config()
const entry= path.resolve('src','Client' , 'index.js')

module.exports = {
    entry,
    mode : process.env.MODE,
    output : {
      filename: 'client.js',
        path : path.resolve('dist' , 'client_bundle')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {

              loader: "swc-loader"
            }
          }
        ]
      }
}