function userLogguedMiddleware ( req, res, next ) {
    res.locals.isLogged = false;
    if (req.session.userToLogged) {
        res.locals.isLogged = true;
        res.locals.userToLogged = req.session.userToLogged;
    }
    
    next()
}
module.exports = userLogguedMiddleware;