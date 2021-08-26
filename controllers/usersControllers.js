const path = require("path");
const fs = require("fs");
const { json } = require("express");
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) ;

<<<<<<< HEAD
const usersControllers = {
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req,res) => {
        res.render('./users/register');
    }

};
=======
const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  userCreate: function (req, res) {
      // require the json file and store it in a variable.
      let usersJson = fs.readFileSync('./data/users.json', { encoding: 'utf-8'})
      let dataUser;
      // if userJson is not empty I store it in a variable.
      usersJson == ''? dataUser = [] : dataUser = JSON.parse(usersJson);

      let users = {
          id: uuidv4(),
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
      }
      dataUser.push(users);
>>>>>>> 00daba3f0132fe8a3dbeb41a92b895be024da272

      dataOfFileJSON = JSON.stringify(dataUser);
      fs.writeFileSync('./data/users.json', dataOfFileJSON);
    
    res.redirect('/')
  },
};

module.exports = usersController;