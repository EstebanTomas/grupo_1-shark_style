const mainControllers = {
    home:  (req,res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    register: (req,res) => {
        res.render('register');
    },
    shoppingCart: (req,res) => {
        res.render('ShoppingCart');
    }
}



module.exports = mainControllers;