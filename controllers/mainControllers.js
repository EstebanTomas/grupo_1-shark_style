const mainControllers = {
    home:  (req,res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    productDetail: (req,res) => {
        res.render('./product/productDetail');
    },
    register: (req,res) => {
        res.render('./users/register');
    },
    shoppingCart: (req,res) => {
        res.render('shoppingCart');
    },
    productCreate: (req,res) => {
        res.render('./product/productCreate');
    },
    editProduct : (req, res) => {
        res.render('./product/editProduct');
    },
    productList: (req,res) => {
        res.render('./product/productList');
    }
}



module.exports = mainControllers;