let user = require("../src/database/models/User");

function userLogguedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    if (req.session.userToLogged) {
        res.locals.isLogged = true;
        res.locals.userToLogged = req.session.userToLogged;
    }/* 
    var userCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField("email", userCookie);
    console.log(userFromCookie); */
    next()
}
module.exports = userLogguedMiddleware;