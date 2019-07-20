let customerService = require('../services/customerService');
let cs = new customerService();
let error = require('../../util/Error');
exports.updateCustomer = (req,res,next)=>{
    cs.updateCustomer(req.body).then(resp =>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getCustomer = (req,res,next)=>{
    cs.findById(req.body.payload.customer_id).then(customer =>{
        res.json(customer);
    }).catch(err=>{
        res.json(err);
    })
}


exports.saveCustomer = (req,res,next)=>{
    cs.saveCustomer(req.body).then(resp=>{
    let object = cs.createSessionToken(resp);
    res.json(object);
    }).catch(err=>{
        res.json(err);
    })
}

exports.login = (req,res,next)=>{
    cs.customerLogin(req.body).then(customer =>{
        if(!customer || customer.password != req.body.password){
            error.message = "Error in credentials the customer!";
            res.json(error);
        }
        else{
            cs.findById(customer.customer_id).then(resp=>{
           
                let object= cs.createSessionToken(resp);
                res.json(object);
               })
        }
       
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

