// import http from 'http'
// import path from 'path'
// import serveStatic from 'serve-static'
// require('dotenv').config()

// const serve_html = serveStatic(path.join(__dirname, '..', '..' ,'/public') , {index : ['index.html']})
// const requestListner= (req,res)=>{
   
//     if(req.url === '/'){
//         serve_html(req,res , ()=>{
//             console.log("html server sucessfully")
//         })
      
//     }

// }
// const app = http.createServer(requestListner )
import express from 'express'
import path from 'path'
const app = express()
require('dotenv').config()
app.use(express.static(path.join(__dirname, '..' , '..' , '/public')))
app.use(express.static(path.join(__dirname, '..' , '..' , '/dist/client_bundle')))


app.listen(process.env.RENDERING_SERVER_PORT , ()=>{
    console.log(`Client is running at port ${process.env.RENDERING_SERVER_PORT}`)
})