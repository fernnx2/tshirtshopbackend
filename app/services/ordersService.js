var models = require('../models/index');

class OrdersService{


    //create order
    saveOrder(order){
            return  models.orders.create(order);
    }

    //order get  info
    orderGetInfo(order_id){
            return  models.sequelize.query('call orders_get_order_info(:orderId)',{
                replacements:{orderId:order_id}
            });
    }

    //get order by customerId
    findByCustomer(customer_id){   
            return models.sequelize.query('call orders_get_by_customer_id(:customerId)',{
                replacements:{customerId:customer_id}
            });
    }

    //get order shortdetail by orderId
    getOrderDetail(order_id){
            return  models.sequelize.query('call orders_get_order_short_details(:orderId)',{
                replacements:{orderId:order_id}
            });
    }


}

module.exports = OrdersService;