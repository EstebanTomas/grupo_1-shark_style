const express = require('express');
const path = require('path');
const app = express();

// variables with files inside the router
var indexRouter = require('./routes/index');

// route to login and register de users.js
var usersRouter = require('./routes/users');

// route to detail, create, edit and list of products.js
var productRouter = require('./routes/product');

// route to shopping.js
var shoppingRouter = require('./routes/shopping');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// configuration 
const publicpath = path.join(__dirname, './public');
app.use(express.static(publicpath));
<<<<<<< HEAD

=======
>>>>>>> 00daba3f0132fe8a3dbeb41a92b895be024da272
app.set('view engine', 'ejs');

// server
app.listen( 3000, () => {
    console.log('Server on port 3000');
});


app.use('/', indexRouter);

app.use('/cart', indexRouter);

app.use('/users', usersRouter);

app.use('/products', productRouter);

app.use('/shopping', shoppingRouter);
