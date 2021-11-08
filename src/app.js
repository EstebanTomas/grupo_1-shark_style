// methods
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
//const cookieParser = require('cookie-parser');
//const  ejsLint  =  require ( 'ejs-lint' );

// variables with files inside the router
var indexRouter = require('./routes/index');
// 
var administrationRouter = require('./routes/admin');
// route to login and register of users.js,
var usersRouter = require('./routes/users');

// route to detail, create, edit and list of products.js
var productRouter = require('./routes/product');

// route to shopping.js
var shoppingRouter = require('./routes/shopping');

//configuration to be able to use put and delete.
app.use(methodOverride('_method'));
//configuration to be able to capture the information of the form and process it.
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//configuration of Express-session.
app.use(session({secret: 'keep secret'}));
//   setting globally to cookie
//app.use(cookieParser);

// view engine setup
const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// server
app.listen( 3000, () => {
    console.log('Server on port 3000');
});

// main routes
app.use("/", indexRouter);
app.use("/admin", administrationRouter)
app.use("/cart", indexRouter);
app.use( "/users", usersRouter);
app.use("/products", productRouter);
app.use("/shopping", shoppingRouter);

app.use((req, res, next) => {
    res.status(404).render('error')
})

