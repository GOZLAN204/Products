const express = require('express');
const path = require('path');
const app = express();
const port = 5300;
app.use(express.static(path.join(__dirname,'public')));


//Routers
app.get('/',(req,res)=>{res.sendFile(__dirname+"/index.html")})

const products = require('./routs/products')
app.use('/products',products);



//Start
app.listen(port,()=>{console.log(`http://localhost:${port}`);})