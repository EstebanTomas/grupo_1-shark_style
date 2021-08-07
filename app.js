const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, './public');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var productDetailRouter = require('./routes/productDetail');
var shoppingCartRouter = require('./routes/ShoppingCart');

app.use(express.static(publicpath));

app.set('view engine', 'ejs');

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});



app.use('/', indexRouter);

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/product', productDetailRouter);

app.use('/shopping', shoppingCartRouter);
