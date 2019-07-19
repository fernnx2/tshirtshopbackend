let customerService = require('../services/customerService');
let cs = new customerService();

exports.updateCustomer = (req,res,next)=>{
    cs.updateCustomer(req.body).then(resp =>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getCustomer = (req,res,next)=>{
    cs.findById(req.params.customer_id).then(customer =>{
        res.json(customer);
    }).catch(err=>{
        Response.json(err);
    })
}

exports.saveCustomer = (req,res,next)=>{
    cs.saveCustomer(req.body).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    })
}

exports.login = (req,res,next)=>{
    cs.login(req.body).then(customer =>{
       res.json(customer); 
    }).catch(err=>{
        res.json(err);
    });
} 

exports.updateCustomerAddress = (req,res,next)=>{
    cs.updateCustomerAddress(req.body).then(address=>{
        res.json(address);
    }).catch(err=>{
        res.json(err);
    });
}

exports.udpateCustomerCreditCard = (req,res,next)=>{
    cs.updateCustomerCreditCard(req.body).then(creditCard =>{
        res.json(creditCard);
    }).catch(err=>{
        res.json(err);
    });
}

