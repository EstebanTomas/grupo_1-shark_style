const { json } = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const { data } = require("jquery");


const mainControllers = {

    "views": (req, res) => {
        let productData = db.Product.findAll()
            .then(function (allProducts) {
                return res.render("./product/productlist", { "data": allProducts });
            }).catch(data => {
                return res.send(data)
            })
        Promise.All([productData])
            .then()
    },
    // envio los productos a la vista index.
    home: (req, res) => {
        let database = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/products.json"), { encoding: "utf-8", }));
        res.render('index', { database });
    },
    carrousel: (req, res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;