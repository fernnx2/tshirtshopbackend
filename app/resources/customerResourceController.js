const models = require('../models/index')

class CustomerResourceController {

    //post
    async saveCustomer(customer){
        try {
            //call procedure customer_add
        return await models.sequelize.query('call customer_add(:name,:email,:password)',{
            replacements:{name:customer.name,email:customer.email,password:customer.password}
        });
        } catch (err) {
        return await err;
        }
    }


    //get customer
    async findById(customer_id){
        try {
         return await models.customer.findByPk(customer_id);   
        } catch (err) {
            return await err;
        }
    }

    //put 
    async updateCustomer(customer){
        try {
            return await models.customer.update(customer,{where:{customer_id : customer.customer_id}});
        } catch (err) {
            return await err;
        }
    }

    //post login
    async customerLogin(login){
        try {
            let access = models.sequelize.query('call customer_get_login_info(:email)',{
                replacements:{email:login.email}
            });
            if(access!=null && access.password===login.password){
                //return the token 
                return this.findById(access.customer_id);
            }else{
               //return menssage error
            }
        } catch (err) {
            return await err;
        }
    }

    //post login facebook
    async customerLoginFacebook(login){
        //await
    }


    //update customer address
    async updateCustomerAddress(customerAddress){
        try {
            return await models.sequelize.query('call customer_update_address(:customerId,:address1,:address2,:city,:region,:postalCode,:country,:shippingRegionId)',{
                        replacements:{
                            customerId:customerAddress.customer_id,
                            address1:customerAddress.address_1,
                            address2:customerAddress.address_2,
                            city:customerAddress.city,
                            region:customerAddress.region,
                            postalCode:customerAddress.postal_code,
                            coutry:customerAddress.coutry,
                            shippingRegionId:customerAddress.shipping_region_id
                        }
            });
        } catch (err) {
            return await err;
        }
    }

    //update customer credit card
    async updateCustomerCreditCard(customerCreditCard){
        try {
            return await models.sequelize.query('call customer_update_credit_card(:customer_id,:credit_card)',{
                replacements:{
                    customer_id:customerCreditCard.customer_id,
                    credit_card:customerCreditCard.credit_card
                }
            });
        } catch (err) {
            return await err;
        }
    }


}

module.exports = CustomerResourceController;