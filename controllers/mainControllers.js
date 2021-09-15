const fs = require('fs');
let articlsOfProducts = fs.readFileSync("./data/products.json", {encoding: "utf-8",});


const mainControllers = {
    home:  (req,res) => {
        let products = JSON.parse(articlsOfProducts);
        let productos;
        for (let i = 0; i <= products.length; i++) {
            productos = products[i];
        }
        res.render('index', {product: productos});
    },
    carrousel: (req,res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;