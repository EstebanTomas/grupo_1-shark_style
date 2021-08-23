const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, './public');

// variables with files inside the router
var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

// rutas a products.js
var ProductRouter = require('./routes/product');


app.use(express.static(publicpath));


app.set('view engine', 'ejs');

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/', indexRouter);
app.use('/cart', indexRouter);



app.use('/users', usersRouter);

app.use('/products', ProductRouter);

