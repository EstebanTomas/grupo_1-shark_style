function profileMiddlewares ( req, res, next) {
    let userId = req.session.userToLogged;
    if ( !req.session.userToLogged ) {
        return res.redirect("/users/login");
    }
    next();
}

module.exports = profileMiddlewares;