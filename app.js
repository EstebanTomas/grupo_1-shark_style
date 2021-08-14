const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, './public');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var productDetailRouter = require('./routes/productDetail');
var shoppingCartRouter = require('./routes/shoppingCart');
var productCreateRouter = require('./routes/productCreate');
<<<<<<< HEAD
var editProductRouter = require('./routes/editProduct');
=======
var productListRouter = require('./routes/productList');
>>>>>>> 0a475053c415b0220ea2205cd4b42dc756f93ab7

app.use(express.static(publicpath));

app.set('view engine', 'ejs');

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/', indexRouter);

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/productDetail', productDetailRouter);

app.use('/shopping', shoppingCartRouter);

app.use('/productCreate', productCreateRouter);

<<<<<<< HEAD
app.use('/editProduct', editProductRouter);
=======
app.use('/productList', productListRouter);
>>>>>>> 0a475053c415b0220ea2205cd4b42dc756f93ab7
