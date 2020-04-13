const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({errors:{msg:'No token,authorization denied'}});
    }
    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        // console.log(decoded);
        req.userId = decoded.id;
        // console.log(req.userId);
        next();
    } catch (err) {
        res.status(401).json({errors:{msg:'Token is not valid'}})
        
    }
}