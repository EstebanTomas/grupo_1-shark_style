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
    // let productsOfJson = fs.readFileSync("./data/products.json", {encoding: "utf-8"});
    // let datas = JSON.parse(productsOfJson);
    // if (datas.includes (1)) {
    //   res.send('Hola como estas' + req.params.idProducts + datas)
    // }
    // let product;
    // for (let i = 0; i <= dataOfJson.length; i++) {
    //   if (dataOfJson[i].id == req.params.idProducts ) {
    //     product = dataOfJson[i];
    //   }
    // }
    // res.render("./product/productEdit");
    const products = JSON.parse(fs.readFileSync('./data/products.json', { encoding: 'utf-8' }));
    var productToEdit = req.params.idProducts;
    const EditProduct = products.find(toEdit => { toEdit.id == productToEdit });
    return res.render("./product/productEdit", { "object": EditProduct });
  },
  edit: (req, res) => {
    // I store in name, the value that comes from the name field.
    var Name = req.body.name;
    // I bring the file products.json and convert it to either literal or array object format.
    let productsJson = fs.readFileSync("./data/products.json", {
      encoding: "utf-8",
    });
    let dataJSON = JSON.parse(productsJson);
    for (let i = 0; i <= dataJSON.length; i++) {
      if (dataJSON[i] == Name) {
        var data = dataJSON[i];
        return data;
      } else {
      }
    }
    res.send("hola");
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