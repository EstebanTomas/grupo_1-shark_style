function guesMiddlewares ( req, res, next) {
    let userId = req.session.userToLogged;
    if (req.session.userToLogged) {
        return res.redirect("/users/profile/" + userId.id );
    }
    next();
}

module.exports = guesMiddlewares;
