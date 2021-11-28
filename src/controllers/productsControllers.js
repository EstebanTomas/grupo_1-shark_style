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
const product = db.product;


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
      db.ProductShop.create({
        product_id: product.id,
        size: req.body.size,
        color: req.body.color,
        amount: 1,
        subtotal: product.price
      })
      .then ( productShop => {
          db.Shopping.create({
            product_shop_id: productShop.id,
            user_id: req.session.userToLogged.id,
            total: 0
        })
      })
      .catch(error => {
        return res.send(error);
      })
    })
    .then( shopping => {
      res.redirect('/shopping');
    })
    .catch(error => {
      return res.send(error);
    })
  },
  //barra de busqueda
  searchProduct: (req, res) => {
    db.Product.findAll({
      where: {
        name: { 
          [Op.like] : '%' + req.body.search + '%' 
        }
      }, 
      include: ['images']
    })
    .then(product => {
      let array = [];
      for ( let i = 0;  i < product.length; i++) {
        array.push(product[i]);
      }
      // ****No puedo mostrarle otra cosa cuando no trae resultados***
      if ( Product  == [] ) {
         res.redirect('/');
       } else {
        res.render('./product/searchResults', { array });
       }
    })
    .catch(error => {
      return res.send(error);
    })
  }
};

module.exports = productsControllers;
