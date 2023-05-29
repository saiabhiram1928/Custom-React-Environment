const path = require('path')

console.log(path.join(__dirname , '..' , '..' , '/public/index.html'))
console.log(path.join(__dirname , '..' , '..' , '/dist/bundle.js'))
const client= path.resolve('src','Client' , 'index.js')
const server= path.resolve('src','Server' , 'index.js')
console.log(client , server)