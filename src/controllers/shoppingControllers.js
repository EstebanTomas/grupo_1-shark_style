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
        // preguntar si hay un usuario loogeado
        db.Shopping.findAll({
            where: { 
                user_id: req.session.userToLogged.id 
            },
            include: ['product_shop']
        })
        .then(products => {
            res.render('./shopping/shoppingCart', { products });
        })
        .catch(error => {
            return res.send(error);
        })
        res.render('./shopping/shoppingCart');
    },
    editShop: (req, res) => {
    },
    edit: (req, res) => {
    },
    delete: (req, res) => {
    },
    buy: (req, res) => {
        db.Shopping.findAll({
            where: { 
                user_id: req.session.userToLogged.id 
            },
            include: ['product_shop']
        })
        .then(data => {
            db.Order.create({
                order_date: Date.now(),
                // una semana despues de que se compra
                date_of_delivery: Date.now() + 07/00/00,
                user_id: req.session.userToLogged.id
            })
            .then(order => {
                let products = data.product_shop.product_id
                for (let i = 0; i < products.length; i++) {
                    db.ProductOrder.create({
                        order_id: order.id,
                        product_id: data.product_shop.product_id[i]
                    })
                }
            })
            .catch(error => {
                return res.send(error);
            })
            .then(product_orders => { 
                db.Shopping.destroy({
                    where: { 
                        user_id: req.session.userToLogged.id 
                    }
                })
            })
            .catch(error => {
                return res.send(error);
            })    
        })
        .then(products => {
            res.redirect('./shopping/congra');
        })
        .catch(error => {
            return res.send(error);
        });    
    },
    congra: (req, res) => {
        res.render('./shopping/congra');
    }
}

module.exports = shoppingControllers;