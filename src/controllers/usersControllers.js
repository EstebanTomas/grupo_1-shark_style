const path = require("path");
const fs = require("fs");
const { json } = require("express");
//const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const db = require("../database/models");
const sequelize = db.sequelize;
const Op = require("sequelize");
const { error } = require("console");

// require the json file and store it in a variable.
let usersJson = fs.readFileSync(path.join(__dirname, "../../data/users.json"), { encoding: "utf-8" });
// models of database
const User_img = db.User_img;
const User = db.User;

const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  createRegister: (req, res) => {
    res.render("./users/register");
  },
  updateRegister: function (req, res) {
    db.User.findByPk(req.params.id, {
      include: [{ association: "image" }]
    })
      .then((data) => {
        console.log(data, "aqui");
        return res.render("./users/updateRegister", { "dataOfUser": data });

      });
  },
  saveEdit: function (req, res) {
    db.User.update({
      name: req.body.name,
      lastname: req.body.lastName,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      role: 1
    },
      {
        where: { id: req.params.id }
      }).then(() => {
        db.User_Img.update({
          avatar: req.file ? req.file.filename : "user_anonimo.jpg",
          user_id: req.params.id
        },{
          where: { user_id: req.params.id }
        })
      })
      .then(() => {
        return res.redirect('/')
      })
      .catch(error => res.send(error))
  }
};

  /*userCreate: function (req, res) {
    // error validation
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let dataUser;
      // if userJson is not empty I store it in a variable.
      usersJson == "" ? (dataUser = []) : (dataUser = JSON.parse(usersJson));
      let database = dataUser.pop();
      dataUser.push(database);
      let users = {
        id: database.id + 1,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file ? req.file.filename : "user_anonimo.jpg",
        role: 1,
      };
      dataUser.push(users);
      dataOfFileJSON = JSON.stringify(dataUser);
      fs.writeFileSync("../data/users.json", dataOfFileJSON);
      res.redirect("/");
    } else {
      res.render("./users/register", { errors: errors.mapped(), incomingData: req.body }) 
    }
    res.redirect("/");
  },*/
// bcrypt.compareSync(clavequebusco, clave que hay 'hash')
module.exports = usersController;