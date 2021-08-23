
const mainControllers = {
    home:  (req,res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req,res) => {
        res.render('./users/register');
    },
    shoppingCart: (req,res) => {
        res.render('shoppingCart');
    },
    carrousel: (req,res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;