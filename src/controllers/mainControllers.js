const { json } = require("express");
const fs = require("fs");
const path = require("path");

const mainControllers = {
    // envio los productos a la vista index.
    home:  (req,res) => {
        let database = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/products.json"), {encoding: "utf-8",}));
        res.render('index', { database });
    },
    carrousel: (req,res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;