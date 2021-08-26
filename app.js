const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, './public');

// variables with files inside the router
var indexRouter = require('./routes/index');

// rutas a login y register de users.js
var usersRouter = require('./routes/users');

// rutas a detail, create, edit y list de products.js
var productRouter = require('./routes/product');

// ruta a shopping.js
var shoppingRouter = require('./routes/shopping');


app.use(express.static(publicpath));

app.set('view engine', 'ejs');

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/', indexRouter);

app.use('/cart', indexRouter);

app.use('/users', usersRouter);

app.use('/products', productRouter);

app.use('/shopping', shoppingRouter);
