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
        db.Product.findAll({
            include: ["images"]
        })
            .then((allProducts) => {
                return res.render("index", {
                    "allProducts": allProducts
                });
            })

    },
    filterHome: (req, res) => {
        db.findAll()
        .then((dataPtoducts) => {
            if (req.params.id == 1 ) {
                let information = dataPtoducts.filter((h) => {
                    return h.gender == "Hombre";
                });
                return res.render("/product/productsFilter", {information});
            }
            if (req.params.id == 2 ) {
                let information = dataPtoducts.filter((h) => {
                    return h.gender == "Hombre";
                });
                return res.render("/product/productsFilter", {information});
            }
        }).catch(error => {
            res.send(error);
        })
    },
    carrousel: (req, res) => {
        res.render('carrousel');
    }
}


module.exports = mainControllers;