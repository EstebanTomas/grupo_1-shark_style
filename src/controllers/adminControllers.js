const fs = require('fs');
const db = require("../database/models");
const sequelize = db.sequelize;
const Op = require("sequelize");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { Association } = require('sequelize');
const { reset } = require('nodemon');

const adminControllers = {
    saveRegister: function (req, res) {
        let errors = validationResult(req);
        db.User.findAll()
        .then(users => {
        if (users.email != req.body.email) {
            if (errors.isEmpty()) {
                db.User.create({
                    name: req.body.name,
                    lastname: req.body.lastName,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    role: 1
                }).then((user) => {
                    db.User_Img.create({
                        avatar: req.file ? req.file.filename : "user_anonimo.jpg",
                        user_id: user.id
                    });
                }).then(() => {
                    return res.redirect("/");
                }).catch((error) => {
                    return res.send(error)
                });
            } else {
                res.render("./users/register", { errors: errors.mapped(), incomingData: req.body })
            }
        }else {
            return res.render("./users/register", {errors: errors.mapped(), incomingData: req.body})
        }});
    },
    updateRegister: function (req, res) {
        db.User.findByPk(req.params.id, {
            include: [{ association: "UserImg" }]
        }).then((data) => {
            return res.render("./users/updateRegister", { "dataOfUser": data });
        })
    },
    update: (req, res) => {

    }
}

module.exports = adminControllers;