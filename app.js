const express = require('express');

const path = require('path');

const app = express();

const publicpath = path.join(__dirname, './public');

app.use(express.static(publicpath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/home',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/arch',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/homehome.html'));
});

app.get('/shop',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/ShoppingCart.html'));
});

app.get('/shoping',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/PusharseCatalog.html'));
});