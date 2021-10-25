const fs = require('fs');
const db = require("../database/models");
const sequelize = db.sequelize;
const Op = require("sequelize");
const path = require("path");


const adminControllers = {
    updateRegister: function (req, res) {
        return res.render("./users/updateRegister")
    },
    update: (req, res) => {
        db.User.findByPk(req.params.id,{
            include: ["UserImg"]
        })
    }
}

module.exports = adminControllers;