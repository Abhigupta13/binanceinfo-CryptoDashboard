const express = require('express');
const connect = require('./config/db');
const bodyParser= require('body-parser');

const path = require('path');
const api = require('./api');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.get("/",(req,res)=>{
    res.send({message:"Welcome to binance backend"})
})
app.use('/api',api);

app.listen(port,async()=>{
    console.log(`Server listen on ${port}`)
    await connect();
})