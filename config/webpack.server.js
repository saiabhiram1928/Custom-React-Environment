const path  = require('path')
require('dotenv').config()
const entry= path.resolve('src','Rendering_Server' , 'index.js')
module.exports = {
    entry,
    target : "node",
    mode : process.env.MODE,
    output : {
      filename: 'Rendering_server.js',
    path : path.resolve('dist' , 'RS_bundle')
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