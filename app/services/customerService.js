const models = require('../models/index')

class CustomerService {

    //post
    saveCustomer(customer){
            //call procedure customer_add
     return  models.sequelize.query('call customer_add(:name,:email,:password)',{
            replacements:{name:customer.name,email:customer.email,password:customer.password}
        }).then(resp=>{
            return this.findById(resp[0]['LAST_INSERT_ID()']);
        }).catch(err=>{
            return err;
        });
    }

    //get customer
    findById(customer_id){   
         return models.customer.findByPk(customer_id);   
    }

    //put 
     updateCustomer(customer){
      return models.customer.update(customer,{where:{customer_id : customer.customer_id}}).then(resp=>{
         if(resp){
             return this.findById(customer.customer_id);
         }
      }).catch(err=>{
          return err;
      });    
    }

    //post login
     customerLogin(login){
        
            models.sequelize.query('call customer_get_login_info(:email)',{
                replacements:{email:login.email}
            }).then(acces=>{
                if(access!=null && access.password===login.password){
                    //return the token 
                    return this.findById(access.customer_id);
                }else{
                   //return menssage error
                }
            });
            
       
    }

    //post login facebook
     customerLoginFacebook(login){
        //await
    }


    //update customer address
    updateCustomerAddress(customerAddress){
        
            return models.sequelize.query('call customer_update_address(:customerId,:address1,:address2,:city,:region,:postalCode,:country,:shippingRegionId)',{
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
    }

    //update customer credit card
    updateCustomerCreditCard(customerCreditCard){
       
            return  models.sequelize.query('call customer_update_credit_card(:customer_id,:credit_card)',{
                replacements:{
                    customer_id:customerCreditCard.customer_id,
                    credit_card:customerCreditCard.credit_card
                }
            });
    }


}


module.exports = CustomerService;