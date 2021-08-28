const path = require("path");
const fs = require("fs");
const { json } = require("express");

const productsControllers = {
    productCreate: (req, res) => {
        res.render('./product/productCreate');
    },
    productDetail: (req, res) => {
        res.render('./product/productDetail');
    },
    editProduct: (req, res) => {
        res.render('./product/editProduct');
    },
    productList: (req, res) => {
        res.render('./product/productList');
    },
    newProduct: (req, res) => {

        let productJson = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });

        let productcreate;

        productjson == '' ? dataOfProducts = [] : dataOfProducts = JSON.parse(productJson);

        let product = {

            name: req.body.name,
            descriprtion: req.body.descriprtion,
            price: req.body.price,

        }
        dataOfProducts.push(product);

        dataOfFileJSON = JSON.stringify(dataOfProducts);
        fs.writeFileSync('./data/products.json', dataOfFileJSON);

        res.redirect('/products/list')
    },
}

module.exports = productsControllers;