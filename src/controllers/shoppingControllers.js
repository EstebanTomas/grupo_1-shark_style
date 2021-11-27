const fs = require('fs');
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const multer = require('multer');
const bcryptjs = require("bcryptjs");
const { reset } = require('nodemon');
const { error } = require('jquery');

const shoppingControllers = {
    shopping: (req, res) => {
        db.Shopping.findAll({
            where: { 
                user_id: req.session.userToLogged.id 
            },
            include: [{
                association: 'product_shop',
                include: [{
                    association: 'product',
                    include: [{
                        association: 'images',
                    }, {
                        association: 'sizes' 
                    }, {
                        association: 'colors',
                    }]
                }]
            }]
        })
        .then( shopping => {
            if (shopping != '') {
                let array = [];
                for ( let i = 0;  i < shopping.length; i++) {
                    array.push(shopping[i].product_shop.subtotal);
                }
                let total = array.reduce( function (acum, num) {
                    return acum + num;
                })
                let carrito = shopping.length; 
                res.render('./shopping/shoppingCart', { carrito, shopping, total });
            } else {
                carrito = 0;
                total = 0;
                res.render('./shopping/shoppingCart', { carrito, shopping, total });
            }
        })
        .catch( error => {
            return res.send(error)
        })
    },
    edit: (req, res) => {
        // ** product_shop
        db.ProductShop.findByPk(req.params.id, {
            include: ['product']
        })
        .then( product_shop => {
            let subtotal = req.body.amount * product_shop.product.price;
            db.ProductShop.update({
                product_id: product_shop.product_id,
                size: req.body.size,
                color: req.body.color,
                amount: req.body.amount,
                subtotal: subtotal
            }, {
                where: {id: req.params.id}
            })
            .then( () => {
                res.redirect('/shopping');
            })
            .catch(error => {
                return res.send(error);
            })
        })
        .catch(error => {
            return res.send(error);
        })
    },
    delete: (req, res) => {

        let shopping = db.Shopping.destroy({
            where: {
                product_shop_id: req.params.id
            }
        })
    
        let productShop = db.ProductShop.destroy({
            where: {
                id: req.params.id
            }
        })

        Promise.all([shopping, productShop])
        .then(() => {
            res.redirect("/shopping");
        })
        .catch(error => {
            return res.send(error);
        })
    },
    buy: (req, res) => {
        // db.Shopping.findAll({
        //     where: { 
        //         user_id: req.session.userToLogged.id 
        //     },
        //     include: ['product_shop']
        // })
        // .then(data => {
        //     db.Order.create({
        //         order_date: Date.now(),
        //         date_of_delivery: Date.now(),
        //         user_id: req.session.userToLogged.id
        //     })
        //     .then(order => {
        //         for (let i = 0; i < data.length; i++) {
        //             db.ProductOrder.create({
        //                 order_id: order.id,
        //                 product_id: data[i].product_shop.product_id
        //             })
        //         }
        //     })
        //     .catch(error => {
        //         return res.send(error);
        //     })
        //     .then( () => { 
        //         db.Shopping.destroy({
        //             where: { 
        //                 user_id: req.session.userToLogged.id 
        //             }
        //         })
        //     })
        //     .catch(error => {
        //         return res.send(error);
        //     })    
        // })
        // .then( () => {
        //     res.redirect('./shopping/congratulations');
        // })
        // .catch(error => {
        //     return res.send(error);
        // });    
    },
    congra: (req, res) => {
        res.render('./shopping/congratulations');
    }
}

module.exports = shoppingControllers;