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
    db.Product.findByPk(req.params.id, {
      include: ['images', 'sizes', 'colors']
    })
    .then(product => {
      res.render("./product/productDetail", { product });
    })
    .catch(error => {
      return res.send(error);
    });  
  },
  productShop: (req, res) => {
    // ** product_shop
    db.Product.findByPk(req.params.id)
    .then( product => {
      console.log(product.id);
      console.log(req.body.size);
      // console.log(req.session.userToLogged.id);
      // db.ProductShop.create({
      //   product_id: product.id,
      //   size: req.body.size,
      //   color: req.body.color,
      //   amount: 1,
      //   subtotal: product.price
      // })
      // .then ( productShop => {
      //   db.Shopping.create({
      //     product_shop_id: productShop.id,
      //     user_id: req.session.userToLogged.id,
      //     total: 22
      //   })
      // })
      // .catch(error => {
      //   return res.send(error);
      // })
    })
    .then( shopping => {
      res.send('Hola mundo');
    })
    .catch(error => {
      return res.send(error);
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
