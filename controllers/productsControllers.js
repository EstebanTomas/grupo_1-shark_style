const path = require("path");
const fs = require("fs");
const { json } = require("express");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");


const productsControllers = {
  administration: (req, res) => {
    let products = JSON.parse(fs.readFileSync("./data/products.json", { encoding: "utf-8" }));
    res.render('./product/productsAdmin', { products });
  },
  productCreate: (req, res) => {
    res.render("./product/productCreate");
  },
  create: (req, res) => {
    let productsJson = fs.readFileSync("./data/products.json");
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
      image: req.file ? req.file.filename : "",
      size: req.body.size,
      models: req.body.models,
      gender: req.body.gender,
      category: req.body.category,
    };

    dataOfProducts.push(product);

    dataOfListProducts = JSON.stringify(dataOfProducts, null, 2);
    fs.writeFileSync("./data/products.json", dataOfListProducts);

    res.redirect("/products/");
  },
  productDetail: (req, res) => {
    let dataOfJson = JSON.parse(fs.readFileSync('./data/products.json', { encoding: 'utf-8' }));
    let idProduct = req.params.id;
    const element = dataOfJson.filter((product) => {
      return product.id == idProduct;
    });
    res.render("./product/productDetail", { "information": element });
  },
  editProduct: (req, res) => {
    const products = JSON.parse(fs.readFileSync('./data/products.json', { encoding: 'utf-8' }));
    let productToEdit = req.params.id;
    const EditProduct = products.filter((toEdit) => { 
      return toEdit.id == productToEdit;
    });
    res.render("./product/productEdit", { "object": EditProduct });
  },
  edit: (req, res) => {
    let productsJson = fs.readFileSync("./data/products.json", { encoding: 'utf-8' });
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

    // function cambiarValor( id, newProduct) {
    //   for (let i = 0; i <= dataOfProducts.length; i++) {
    //     if ( dataOfProducts[i].id === id ) {
    //       dataOfProducts[i] = newProduct;
    //     }
    //   }
    // }

    // let valorCambiado = cambiarValor(idProduct, productNew);
    // dataOfProducts.forEach ( function ( product ) {
    //   if ( product.id !== productNew.id) {
    //     date = dataOfProducts.shift()
    //     dateNew = dateNew + date;
    //   }else {
    //     dateNew = dateNew + productNew;
    //   }
    // })

    // dataOfListProducts = JSON.stringify( dataNew, null, 2);
    // fs.writeFileSync("./data/products.json", dataOfListProducts);

    // res.send("Hola " + idProduct + valorCambiado);
    // res.redirect("/products/");
    // I store in name, the value that comes from the name field.
    // var Name = req.body.name;
    // I bring the file products.json and convert it to either literal or array object format.
    // let productsJson = fs.readFileSync("./data/products.json", {
    //   encoding: "utf-8",
    // });
    // let dataJSON = JSON.parse(productsJson);
    // for (let i = 0; i <= dataJSON.length; i++) {
    //   if (dataJSON[i] == Name) {
    //     var data = dataJSON[i];
    //     return data;
    //   } else {
    //   }
    // }
    // res.send("hola");
  },
  productList: (req, res) => {
    let products = JSON.parse(fs.readFileSync("./data/products.json", {
      encoding: "utf-8",
    }));
    res.render("./product/productList", { products });
  },
  delete: (req, res) => {
    // I bring the data
    let productsOfJson = fs.readFileSync("./data/products.json", { encoding: "utf-8" });
    let datas = JSON.parse(productsOfJson);
    // if what comes from "req" is not equal to the database id, I save it in productsNotRemoved, if it is equal, I discard it.
    let productsNotRemoved = datas.filter(data => {
      return data.id != req.params.id;
    });

    let productosJSON = JSON.stringify(productsNotRemoved, null, 2);
    fs.writeFileSync("./data/products.json", productosJSON);
    res.redirect("/products/admin");

  },
};

module.exports = productsControllers;