function administratorMiddlewares ( req, res, next) {
    let userId = req.session.userToLogged;
    if (userId.role == 1) {
        return res.redirect("/users/profile/" + userId.id );
    }
    next();
}

module.exports = administratorMiddlewares;