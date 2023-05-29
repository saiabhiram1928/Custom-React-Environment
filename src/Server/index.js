const express=  require('express');
const app =express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI,{
    useNewurlParser: true
})
mongoose.connection.once('open' , ()=> console.log("db connected")).on('error' ,(err)=>console.log("db connection failed"))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});
app.use('/' , (req,res) =>{
    res.send('hii')
})

app.listen(process.env.DATA_SERVER_PORT, (req,res) =>{
    console.log(`Server running in port ${process.env.DATA_SERVER_PORT}`)
})
