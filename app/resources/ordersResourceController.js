let ordersService = require('../services/ordersService');
let os = new ordersService();

exports.saveOrder = (req,res,next)=>{
    let now = new Date();
    req.body.created_on=now;
    os.saveOrder(req.body).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getOrderInfo = (req,res,next)=>{
    os.orderGetInfo(req.params.order_id).then(order=>{
        res.json(order);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getOrderInCustomer = (req,res,next)=>{
    os.findByCustomer(req.params.customer_id).then(order=>{
        res.json(order);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getOrderDetail = (req,res,next)=>{
    os.getOrderDetail(req.params.order_id).then(orderDetail=>{
        res.json(orderDetail);
    }).catch(err=>{
        res.json(err);
    })
}