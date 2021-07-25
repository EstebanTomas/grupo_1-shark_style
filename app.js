const express = require('express');

const path = require('path');

const app = express();

const publicpath = path.join(__dirname, './public');

app.use(express.static(publicpath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get ( "/productDetail", function ( req, res ) {
    res.sendFile ( path.join ( __dirname, "/views/productDetail.html"));
})