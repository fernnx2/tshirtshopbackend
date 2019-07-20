let jwt = require('jsonwebtoken');
let CONFIG = require('../../config/config');
let unauthorized = require('../../util/Unauthorized');
module.exports = (req, res, next) => {

    if (autherizationRoute(req, routes)) {
        if (req.headers.authorization) {
            let token = req
                .headers
                .authorization
                .split(' ')[1];
            jwt.verify(token, CONFIG.CONFIG_TOKEN, function (error, decoded) {
                if (error) {
                    return res
                        .status(500)
                        .send(error);
                } else {
                    req.body = {
                        payload: decoded
                    };
                    next()
                }

            });
        } else 
            res
                .status(403)
                .send(unauthorized);
        }
    else 
        next();
    }

var routes = [
    [
        "/customer", "GET"
    ],
    ["/categories/pag", "GET"]
]

function autherizationRoute(req, route) {
    for (let x = 0; x < route.length; x++) {
        if (req.path.includes(route[x][0]) && req.method == route[x][1]) 
            return true;
        }
    return false;
}