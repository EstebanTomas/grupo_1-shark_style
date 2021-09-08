const fs = require('fs');
let articulo = fs.readFileSync("./data/products.json", {
    encoding: "utf-8",
  });


const mainControllers = {
    home:  (req,res) => {
        res.render('index');
    },
    carrousel: (req,res) => {
        res.render('carrousel', {articulos: articulo});
    }
}


module.exports = mainControllers;