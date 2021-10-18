const path = require("path");
const fs = require("fs");
const { json } = require("express");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");

// require the json file and store it in a variable.
let usersJson = fs.readFileSync("../data/users.json", { encoding: "utf-8" });

const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  userCreate: function (req, res) {
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
        avatar: req.file ? req.file.filename : "",
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
  },
};
// bcrypt.compareSync(clavequebusco, clave que hay 'hash')


module.exports = usersController;
