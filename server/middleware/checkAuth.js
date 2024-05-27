
exports.isLoggedIn = function (req, res, next){
    if(req.user){
        next()
    }else{
        return res.status(401).send('<h2>Access Denied<h2/>')
    }
}