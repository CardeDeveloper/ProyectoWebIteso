const jwt = require('jsonwebtoken');
//middlewares

function validateUser(req, res, next){
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded){
        if(err){
            res.status(401).json({status: "error de autenticacion", message: err.message, data:null});
        }else{
            req.body.userId = decoded.id;
            req.body.userType = decoded.type;
            next();
        }

    })
}
//admin
function validateAdmin(req, res, next){
    
        console.log(req.body.userType)
        if(req.body.userType != 1){ //0 mesero , 1 admin
            res.status(401).json({status: "error de permisos", message: "Debes ser administrador", data:null});
        }else{
            
            next();
        

    }
};


module.exports = {
    validateUser,
    validateAdmin
};
