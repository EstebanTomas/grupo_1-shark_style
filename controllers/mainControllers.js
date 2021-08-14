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
        res.render('shoppingCart');
    },
    productCreate: (req,res) => {
        res.render('productCreate');
    },
<<<<<<< HEAD
    editProduct : (req, res) => {
        res.render('editProduct');
=======
    productList: (req,res) => {
        res.render('productList');
>>>>>>> 0a475053c415b0220ea2205cd4b42dc756f93ab7
    }
}



module.exports = mainControllers;