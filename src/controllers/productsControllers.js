const path = require("path");
const fs = require("fs");
const { json } = require("express");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const multer = require('multer');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { data } = require("jquery");
const { search } = require("../routes/product");

const productsControllers = {
  productList: (req, res) => {
    db.Product.findAll({
      include: ['images']
    })
      .then(products => {
        // console.log(products[0].images[0].img);
        res.render("./product/productList", { products });
      })
  },
  productDetail: (req, res) => {
    db.ProductModel.findAll({
      where: { 
        product_id: req.params.id 
      },
      include: ['model']
    })
    .then(data => {
      db.Product.findByPk(req.params.id, {
        include: ['images', 'sizes', 'product_models']
      })
      .then(product => {
        // console.log(data[0].model.colors);
        res.render("./product/productDetail", { product, data });
      })
      .catch(error => {
        return res.send(error);
      });  
    })
  },
  //barra de busqueda
  searchProduct: function (req, res) {
  //   db.Product.findAll({
  //     where: {
  //       name: { [Op.LIKE] : `%${req.body.search}%` },
  //       let= 
  //     }
      
  //   })
  //     .then(function (product) {
  //       res.render('searchResults', { result: product });
  //     });
  //     console.log(searchProduct);
  },
};

module.exports = productsControllers;
