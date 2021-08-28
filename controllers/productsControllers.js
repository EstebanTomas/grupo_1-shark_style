const path = require("path");
const fs = require("fs");
const { json } = require("express");
<<<<<<< HEAD
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) ;
=======
const { v4: uuidv4 } = require('uuid');
>>>>>>> ebbd8ac68ef5119bce7f5950f0349cf1cf543d42

const productsControllers = {

    productCreate: (req, res) => {
        res.render('./product/productCreate');
    },
<<<<<<< HEAD
    create: (req , res) => {
        let productsJson = fs.readFileSync('./data/products.json', { encoding: 'utf-8'})
        let dataOfProducts;
        // if userJson is not empty I store it in a variable.
        productsJson == ''? dataOfProducts = [] :  dataOfProducts= JSON.parse(productsJson);
  
        let product = {
          id: uuidv4(),
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
          interests: req.body.interests,
          category: req.body.category
        }
        dataOfProducts.push(product);
  
        dataOfListProducts = JSON.stringify(dataOfProducts);
        fs.writeFileSync('./data/products.json', dataOfListProducts);
      
      res.redirect('/products/list')
    },
    productDetail: (req,res) => {
=======

    create: (req, res) => {
        let productsJson = fs.readFileSync('./data/products.json', { encoding: 'utf-8' })
        let dataOfProducts;
        // if userJson is not empty I store it in a variable.
        productsJson == '' ? dataOfProducts = [] : dataOfProducts = JSON.parse(productsJson);
        let product = {
            id: uuidv4(),
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            interests: req.body.interests,
            category: req.body.category
        }
        dataOfProducts.push(product);
        dataOfListProducts = JSON.stringify(dataOfProducts);
        fs.writeFileSync('./data/products.json', dataOfListProducts);
        res.redirect('/products/list')
    },
    productDetail: (req, res) => {
>>>>>>> ebbd8ac68ef5119bce7f5950f0349cf1cf543d42
        res.render('./product/productDetail');
    },
    editProduct: (req, res) => {
        res.render('./product/editProduct');
    },
<<<<<<< HEAD
    edit: (req,res)=> {
    
    },
    productList: (req,res) => {
        res.render('./product/productList');
    },
    delete: (req, res) => {
        
    }
=======
    productList: (req, res) => {
        res.render('./product/productList');
    },

>>>>>>> ebbd8ac68ef5119bce7f5950f0349cf1cf543d42
}

module.exports = productsControllers;