const fs = require('fs');
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { Association } = require('sequelize');
const { reset } = require('nodemon');
//const { error } = require('jquery');
const { data } = require("jquery");
const { error } = require('console');

const User = db.User;
const Image = db.UserImg;

// ○ Nombre

// ■ Obligatorio.
// ■ Deberá tener al menos 5 caracteres.

// ○ Descripción

// ■ Deberá tener al menos 20 caracteres.

// ○ Imagen

// ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

// ○ (Opcional) Tablas secundarias

// ■ Verificar que los valores existan en base. Es decir, que los valores
// de talles, colores, etc. que lleguen sean válidos en la base.

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
                return res.redirect("/users/login");
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
      include: ["Image"]
    })
      .then(user => {/* 
        res.locals.user = users;
        console.log(req.locals.userToEdit, "naa"); 
        console.log(user, "acá");*/
        req.session.updateUser = user
        return res.render("./users/userEdit", { user });
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  save: function (req, res) {

    var validations = validationResult(req);
    console.log(validations.mapped(), "etyy");
    //    console.log(validations);
    if (validations.isEmpty()) {
      User.update({
        name: req.body.name,
        lastname: req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        role: req.body.role == 9 ? 9 : 9
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
          return res.redirect('/');
        })
        .catch((error) => {
          return res.send(error);
        });
    } else {
      return res.render("./users/userEdit", {
        user: req.session.updateUser,
        "data": req.body,
        "validationErrors": {
          name: {
            msg: "Debes escribir un nombre de usuario con más de 2 caracteres"
          },
          lastName: {
            msg: "Debes escribir un apellido de usuario con más de 2 caracteres"
          },
          email: {
            msg: "Debes escribir un email valido"
          },
          password: {
            msg: "Debes escribir una contraseña con más de 8 caracteres"
          }
        }
      });
    } /* validations.mapped(), */

  },

  // ***PRODUCTS***
  adminProducts: (req, res) => {
    db.Product.findAll({
      include: ['images']
    })
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
    // console.log(req.body);
    // ** products
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      gender: req.body.gender,
      category: req.body.category
    })
      .then(product => {
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
          .then(() => {
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
              .then(() => {
                // ** colors
                let colors = req.body.colors;
                // ** pregunto si viene mas de un color, para que no me itere sobre el nombre del color.
                if (Array.isArray(colors)) {
                  for (let i = 0; i < colors.length; i++) {
                    db.Color.create({
                      color: colors[i],
                      product_id: product.id
                    })
                      .catch(error => {
                        return res.send(error);
                      })
                  }
                } else {
                  db.Color.create({
                    color: colors,
                    product_id: product.id
                  })
                    .catch(error => {
                      return res.send(error);
                    })
                }
              })
              .catch(error => {
                return res.send(error);
              })
          })
          .catch(error => {
            return res.send(error);
          })
      })
      .then(() => {
        res.redirect("/administration/products");
      })
      .catch(error => {
        return res.send(error);
      });
  },
  editProduct: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ['images', 'sizes', 'colors']
    })
      .then(product => {
        res.render("./admin/productEdit", { product });
      })
      .catch(error => {
        return res.send(error);
      });
  },
  edit: (req, res) => {
    // ** products  
    db.Product.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      gender: req.body.gender,
      category: req.body.category
    }, {
      where: { id: req.params.id }
    })
      .then(product => {
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
          where: { product_id: req.params.id }
        })
<<<<<<< HEAD
          .then(() => {
            // ** models
            db.Color.destroy({
              where: {
                product_id: req.params.id
              }
            })
              .then(() => {
                let colors = req.body.colors;
                for (let i = 0; i < colors.length; i++) {
                  db.Color.create({
                    color: colors[i],
                    product_id: req.params.id
                  })
                    .catch(error => {
                      return res.send(error);
                    })
                }
              })
              .catch(error => {
                return res.send(error);
              })
          })
          .catch(error => {
            return res.send(error);
          })
          .then(() => {
            // ** images
            db.Image.findAll({
              where: {
                product_id: req.params.id
              }
            })
              .then(data => {
                let id0 = data[0].id;
                let id1 = data[1].id;
                let id2 = data[2].id;
                console.log(req.files);

                let img0 = db.Image.update({
                  img: req.files[0].filename,
                  product_id: req.params.id
                }, {
                  where: { id: id0 }
                })
                let img1 = db.Image.update({
                  img: req.files[1].filename,
                  product_id: req.params.id
                }, {
                  where: { id: id1 }
                })
                let img2 = db.Image.update({
                  img: req.files[2].filename,
                  product_id: req.params.id
                }, {
                  where: { id: id2 }
                })
                Promise.all([img0, img1, img2])
              })
              .catch(error => {
                return res.send(error);
              })
          })
=======
        .then ( () => {
          // ** colors
          let colors = req.body.colors;
          for (let i = 0; i < colors.length; i++) {
            db.Color.create({
              color: colors[i],
              product_id: product.id
            })
            .catch(error => {
              return res.send(error);
            })
          }
        })
        .catch(error => {
          return res.send(error);
        })
      })
      .catch(error => {
        return res.send(error);
      })
    })
    .then(() => {
      res.redirect("/administration/products");
    })
    .catch(error => {
      return res.send(error);
    });
  },
  editProduct: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ['images', 'sizes', 'colors']
    })
    .then(product => {
      res.render("./admin/productEdit", { product });
    })
    .catch(error => {
      return res.send(error);
    });
  },
  edit: (req, res) => {
    // ** products  .........Me falta editar las imagenes nomas.........
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
>>>>>>> 6b19da5a2a2b4c38dfcc6f09affc8aa0144c4c29
      })
      .then(() => {
        res.redirect("/administration/products");
      })
      .catch(error => {
        return res.send(error);
      })
<<<<<<< HEAD
=======
      // .then ( () => {
        // ** images
        // db.Image.findAll({
        //   where: { 
        //     product_id: req.params.id 
        //   }
        // })
        // .then( data => {
        //   let id0 = data[0].id;
        //   let id1 = data[1].id;
        //   let id2 = data[2].id;
        //   console.log(id0);
        //   console.log(id1);
        //   console.log(id2);
        //   console.log(req.files);

        //   let img0 = db.Image.update({
        //     img: req.files[0].filename,
        //     product_id: req.params.id
        //   }, {
        //     where: {id: id0}
        //   })
        //   let img1 = db.Image.update({
        //     img: req.files[1].filename,
        //     product_id: req.params.id
        //   }, {
        //     where: {id: id1}
        //   })
        //   let img2 = db.Image.update({
        //     img: req.files[2].filename,
        //     product_id: req.params.id
        //   }, {
        //     where: {id: id2}
        //   })
        //   Promise.all([img0, img1, img2])
        // })
        // .catch(error => {
        //   return res.send(error);
        // })
      })
    .then(() => {
      res.redirect("/administration/products");
    })
    .catch(error => {
      return res.send(error);
    })
>>>>>>> 6b19da5a2a2b4c38dfcc6f09affc8aa0144c4c29
  },
  delete: (req, res) => {
    // ***Tratando de borrar los productos de todos los carritos antes de borrar el producto en si***
    // let shopping = db.ProductShop.findAll({
    //   where: {
    //     product_id: req.params.id
    //   }
    // })
    // .then( product_shop => {
    //   for( let i = 0; i < product_shop.length; i++) {
    //     db.Shopping.destroy({
    //       where: {
    //         product_shop_id: product_shop[i].id
    //       }
    //     })
    //     .then( () => {
    //       db.ProductShop.destroy({
    //         where: {
    //           id: product_shop[i].id
    //         }
    //       })
    //       .catch( error => {
    //         return res.send(error);
    //       })
    //     })
    //     .catch( error => {
    //       return res.send(error);
    //     })
    //   }
    // })
    // .catch( error => {
    //   return res.send(error);
    // })

    let sizes = db.Size.destroy({
      where: {
        product_id: req.params.id
      }
    })
      .catch(error => {
        return res.send(error);
      })

    let images = db.Image.destroy({
      where: {
        product_id: req.params.id
      }
    })
      .catch(error => {
        return res.send(error);
      })

    let colors = db.Color.destroy({
      where: {
        product_id: req.params.id
      }
    })
      .catch(error => {
        return res.send(error);
      })

    let product = db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(error => {
        return res.send(error);
      })

    Promise.all([sizes, images, colors, product])
      .then(() => {
        res.redirect("/administration/products");
      })
      .catch(error => {
        return res.send(error);
      });
  },
  deleteUsers: (req, res) => {
    let imgUser = db.User.destroy({
      where: {
        user_id: req.params.id
      }
    });
    let user = db.User.destroy({
      where: {
        id: req.params.id
      }
    });
    Promise.all([imgUser, user])
      .then(() => {

      });
  }
}

module.exports = adminControllers;