const fs = require('fs');
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const multer = require('multer');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { Association } = require('sequelize');
const { reset } = require('nodemon');
const { error } = require('jquery');
const { data } = require("jquery");

const User = db.User;
const Image = db.UserImg;

const adminControllers = {
  // ***USERS***
  saveRegister: function (req, res) {
    let errors = validationResult(req);
    User.findAll()
    .then(users => {
      if (users.email != req.body.email) {
        if (errors.isEmpty()) {
          User.create({
            name: req.body.name,
            lastname: req.body.lastName,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            role: 1
          })
          .then((user) => {
            Image.create({
              avatar: req.file ? req.file.filename : "user_anonimo.jpg",
              user_id: user.id
            });
          })
          .then(() => {
            return res.redirect("/");
          })
          .catch((error) => {
            return res.send(error)
          });
        } else {
          res.render("./users/register", { errors: errors.mapped(), incomingData: req.body })
        }
      } else {
        return res.render("./users/register", { errors: errors.mapped(), incomingData: req.body })
      }
    });
  },
  updateRegister: function (req, res) {
    User.findByPk(req.params.id, {
      include: ["image"]
    })
    .then(users => {
      return res.render("./users/userEdit", { "user": users });
    })
    .catch((error) => {
      return res.send(error)
    });
  },
  save: function (req, res) {
    User.update({
      name: req.body.name,
      lastname: req.body.lastName,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      role: 1
    }, {
      where: { id: req.params.id }
    })
    .then(() => {
      Image.update({
        avatar: req.file ? req.file.filename : "user_anonimo.jpg",
        user_id: req.params.id
      }, {
        where: { user_id: req.params.id }
      })
    })
    .then(() => {
      return res.redirect('/')
    })          
    .catch((error) => {
      return res.send(error)
    });
  },

  // ***PRODUCTS***
  adminProducts: (req, res) => {
    db.Product.findAll()
    .then(products => {
      res.render("./admin/productsAdmin", { products });
    })
    .catch(error => {
      return res.send(error);
    });
  },
  productCreate: (req, res) => {
    res.render("./admin/productCreate");
  },
  create: (req, res) => {
    console.log(req.body);
    // ** products
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      gender: req.body.gender,
      category: req.body.category
    })
    .then( product => {
      // ** sizes
      let sizes = req.body.sizes;
      let xsData = 0;
      let sData = 0;
      let mData = 0;
      let lData = 0;
      let xlData = 0;
      if (sizes.includes("xs")) {
        xsData = 1;
      }
      if (sizes.includes("s")) {
        sData = 1;
      }
      if (sizes.includes("m")) {
        mData = 1;
      }
      if (sizes.includes("l")) {
        lData = 1;
      }
      if (sizes.includes("xl")) {
        xlData = 1;
      }
      db.Size.create({
        product_id: product.id,
        xs: xsData,
        s: sData,
        m: mData,
        l: lData,
        xl: xlData
      })
      //** images 
      let img0 = db.Image.create({
        img: req.files[0].filename,
        product_id: product.id
      })
      let img1 = db.Image.create({
        img: req.files[1].filename,
        product_id: product.id
      })
      let img2 = db.Image.create({
        img: req.files[2].filename,
        product_id: product.id
      })
      Promise.all([img0, img1, img2])
      // // ** models ++TODAVIA NO FUNCIONA CREAR LOS MODELOS++
      // let models = req.body.models;
      // for ( model of models) {
      //   db.Model.create({
      //     img: null,
      //     colors: models
      //   })
      // })
    })
    .then(() => {
      res.redirect("/products/");
    })
    .catch(error => {
      return res.send(error);
    });
  },
  editProduct: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ['images', 'sizes', 'models']
    })
    .then(product => {
      res.render("./admin/productEdit", { product });
    })
    .catch(error => {
      return res.send(error);
    });
  },
  edit: (req, res) => {
    console.log(req.body);
    // ** products
    db.Product.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      gender: req.body.gender,
      category: req.body.category
    }, {
      where: {id: req.params.id}
    })
    .then( product => {
      // ** sizes
      let sizes = req.body.sizes;
      let xsData = 0;
      let sData = 0;
      let mData = 0;
      let lData = 0;
      let xlData = 0;
      if (sizes.includes("xs")) {
        xsData = 1;
      }
      if (sizes.includes("s")) {
        sData = 1;
      }
      if (sizes.includes("m")) {
        mData = 1;
      }
      if (sizes.includes("l")) {
        lData = 1;
      }
      if (sizes.includes("xl")) {
        xlData = 1;
      }
      db.Size.update({
        product_id: product.id,
        xs: xsData,
        s: sData,
        m: mData,
        l: lData,
        xl: xlData
      }, {
        where: {product_id: req.params.id}
      })
      // // ** models ++TODAVIA NO FUNCIONA EDITAR LOS MODELOS++
      // let models = req.body.models;
      // for ( model of models) {
      //   db.Model.create({
      //     img: null,
      //     colors: models
      //   })
      // })
    })
    //** images ++TODAVIA NO FUNCIONA EDITAR LAS IMAGENES++
    // db.Product.findByPk(req.params.id, {
    //   include: ['images', 'sizes', 'models']
    // })
    // .then((product) => {
    //   if (req.files != '') {
    //     fs.unlinkSync(`./public/img/productImage/${product.images[0].img}`);
    //     fs.unlinkSync(`./public/img/productImage/${product.images[1].img}`);
    //     fs.unlinkSync(`./public/img/productImage/${product.images[2].img}`);

    //     let img0 = db.Image.update({
    //       img: req.files[0].filename,
    //     }, {
    //       where: { id: product.images[0].id }
    //     });

    //     let img1 = db.Image.update({
    //       img: req.files[1].filename,
    //     }, {
    //       where: { id: product.images[1].id }
    //     });

    //     let img2 = db.Image.update({
    //       img: req.files[2].filename,
    //     }, {
    //       where: { id: product.images[2].id }
    //     });

    //     Promise.all([img0, img1, img2])
    //   }
    // })
    .then(() => {
      res.redirect("/products/");
    })
    .catch(error => {
      return res.send(error);
    });
  },
  delete: (req, res) => {
    db.Size.destroy({
      where: {
        product_id: req.params.id
      }
    })
    // ++TODAVIA NO FUNCIONA BORRAR LOS MODELOS++
    // .then(() => {
    //   db.Model.destroy({
    //     where: {
    //       product_id: req.params.id
    //     }
    //   })
    // })
    .then(() => {
      db.Image.destroy({
        where: {
          product_id: req.params.id
        }
      })
    })
    .then(() => {
      db.Product.destroy({
        where: {
          id: req.params.id
        }
      })
    })
    .then(() => {
      res.redirect("/administration/products");
    })
    .catch(error => {
      return res.send(error);
    });
  }
}

module.exports = adminControllers;