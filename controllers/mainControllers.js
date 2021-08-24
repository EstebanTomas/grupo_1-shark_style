
const mainControllers = {
    home:  (req,res) => {
        res.render('index');
    },
    carrousel: (req,res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;