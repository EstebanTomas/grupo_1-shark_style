let user = require("../src/database/models/User");

function userLogguedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    if (req.session.userToLogged) {
        res.locals.isLogged = true;
        res.locals.userToLogged = req.session.userToLogged;
<<<<<<< HEAD
    }/* 
    var userCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField("email", userCookie);
    console.log(userFromCookie); */
=======
    }
    // let userCookie = req.cookies.userEmail;
    // let userFromCookie = user.findByField("email", userCookie);
    // console.log(userFromCookie);
>>>>>>> 325771b7a6d12c956867368d8f01484401bb6756
    next()
}
module.exports = userLogguedMiddleware;