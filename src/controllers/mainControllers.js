const { json } = require('express');
const fs = require('fs');


const mainControllers = {
    // envio los productos a la vista index.
    home:  (req,res) => {
        let database = JSON.parse(fs.readFileSync("../data/products.json", {encoding: "utf-8",}));
        
        res.render('index', { database });
    },
    carrousel: (req,res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;