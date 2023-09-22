const express = require('express');
const connect = require('./config/db');
const bodyParser= require('body-parser');

const path = require('path');
const api = require('./api');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/api',api);

app.listen(port,async()=>{
    console.log(`Server listen on ${port}`)
    await connect();
})