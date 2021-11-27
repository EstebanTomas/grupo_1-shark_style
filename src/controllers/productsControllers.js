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
      include: ['images', 'sizes', 'models']
    })
      .then(product => {
        // console.log(product.images);
        res.render("./product/productDetail", { product });
      })
  },
  administration: (req, res) => {
    // I bring all the products
    let products = JSON.parse(fs.readFileSync("../data/products.json", { encoding: "utf-8" }));
    // I send the data to the views
    res.render('./product/productsAdmin', { products });
  },
  productCreate: (req, res) => {
    res.render("./product/productCreate");
  },
  create: (req, res) => {
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      gender: req.body.gender,
      category: req.body.category
    }).then(userOne => {
      db.image.create({
        img: [[req.files[0].filename], [req.files[1].filename], [req.files[2].filename]],
        product_id: userOne.id
      }).then(() => {
        db.Size.create({
          product_id: userOne.id,
        })
      })
    });
  },

  search: (req, res) => {
    db.Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.body.search}%`
        },

      },

    })
      .then(products => {

        return res.render('/product/search', { products });
      })
  },
  /* I bring all the products
  let productsJson = fs.readFileSync("../data/products.json", {encoding: "utf-8"});
  let dataOfProducts;
  // if userJson is not empty I store it in a variable.
  productsJson == "" ? dataOfProducts = [] : dataOfProducts = JSON.parse(productsJson);

  // I take out the last product, I store it in lastProduct.
  let lastProduct = dataOfProducts.pop();
  // I add it again
  dataOfProducts.push(lastProduct);
  // now i have an id counter.
  let product = {
    id: lastProduct.id + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: [[req.files[0].filename], [req.files[1].filename], [req.files[2].filename]],
    size: req.body.size,
    models: req.body.models,
    gender: req.body.gender,
    category: req.body.category,
  };

  dataOfProducts.push(product);

  dataOfListProducts = JSON.stringify(dataOfProducts, null, 2);
  fs.writeFileSync("../data/products.json", dataOfListProducts);

  res.redirect("/products/");
  */

  editProduct: (req, res) => {
    // I bring all the products
    const products = JSON.parse(fs.readFileSync('../data/products.json', { encoding: 'utf-8' }));
var productToEdit = req.params.idProducts;
const EditProduct = products.filter(toEdit => {
  return toEdit.id == productToEdit
});
// I send the data to the views
return res.render("./product/productEdit", { "object": EditProduct });
  },
edit: (req, res) => {
  let productsJson = fs.readFileSync("../data/products.json", { encoding: 'utf-8' });
  let dataOfProducts = JSON.parse(productsJson);
  let idProduct = req.params.id;
  let productNew;

  let oldProduct = dataOfProducts.filter((product) => {
    return product.id == idProduct;
  });

  oldProduct.forEach(product => {
    productNew = {
      id: idProduct,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file ? req.file.filename : "",
      size: req.body.size,
      models: req.body.models,
      gender: req.body.gender,
      category: req.body.category,
    };
  });

  let dataNew = dataOfProducts.map(product => {
    if (product.id = idProduct) {
      return product = productNew;
    }
    return product;
  })

  let dataOfListProducts = JSON.stringify(dataNew, null, 2);
  fs.writeFileSync("../data/products.json", dataOfListProducts);

  res.send("Hola " + idProduct + dataOfListProducts);
},
  delete: (req, res) => {
    // I bring all the products
    let productsOfJson = fs.readFileSync("../data/products.json", { encoding: "utf-8" });
    let datas = JSON.parse(productsOfJson);
    // if what comes from "req" is not equal to the database id, I save it in productsNotRemoved, if it is equal, I discard it.
    let productsNotRemoved = datas.filter(data => {
      return data.id != req.params.id;
    });

    let productosJSON = JSON.stringify(productsNotRemoved, null, 2);
    fs.writeFileSync("../data/products.json", productosJSON);
    res.redirect("/products/admin");

  },

  // //barra de busqueda
  // searchResults: function (req, res) {
  //   db.Product.findAll({

  //     where: {
  //       name: { [Op.like ] : `%${req.body.s}%` },
  //     }

  //    })
  //     .then(function (product) {
  //       res.render('searchResults', {product });
  //     });

  // },
 


};

module.exports = productsControllers;