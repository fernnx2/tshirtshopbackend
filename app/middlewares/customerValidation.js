let error = require('../../util/Error')
module.exports = (req, res, next) => {
    if (req.path == "/customers" && req.method == "POST") {
        let customer = req.body;
        if (!customer.name || !customer.email || !customer.password) 
            return res.status(400).json(error);
        else 
            next();
        }
    else 
        next();
    }