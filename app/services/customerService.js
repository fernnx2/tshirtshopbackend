const models = require('../models/index')
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const error = require('../../util/Error')

class CustomerService {
    //post
    saveCustomer(customer) {
        return models
            .sequelize
            .query('call customer_add(:name,:email,:password)', {
                replacements: {
                    name: customer.name,
                    email: customer.email,
                    password: customer.password
                }
            })
            .then(resp => {
                return this.findById(resp[0]['LAST_INSERT_ID()']);
            })
            .catch(err => {
                return err;
            });
    }

    //get customer
    findById(customer_id) {
        return models
            .customer
            .findByPk(customer_id);
    }

    //put
    updateCustomer(customer) {
        return models
            .sequelize.query('call customer_update_account(:id,:name,:email,:password,:day_phone,:eve_phone,:mob_phone)',{
                replacements:{
                    id:customer.payload.customer_id,
                    name:customer.name,
                    email: customer.email,
                    password:customer.password,
                    day_phone:customer.day_phone,
                    eve_phone:customer.eve_phone,
                    mob_phone:customer.mob_phone
                }
            })
            .then(resp => {
                return resp;
            })
            .catch(err => {
                return err;
            });
    }

    //post login
    customerLogin(login) {

    return models.customer.findOne({where:{email:login.email}});
    }

    //post login facebook
    customerLoginFacebook(login) {
        //await
    }

    //update customer address
    updateCustomerAddress(customerAddress) {
        console.log(customerAddress);
        return models
            .sequelize
            .query('call customer_update_address(:customerId,:address1,:address2,:city,:region,:postalCode,:country,:shippingRegionId)', {
                replacements: {
                    customerId: customerAddress.payload.customer_id,
                    address1: customerAddress.address_1,
                    address2: customerAddress.address_2,
                    city: customerAddress.city,
                    region: customerAddress.region,
                    postalCode: customerAddress.postal_code,
                    country: customerAddress.country,
                    shippingRegionId: Number(customerAddress.shipping_region_id)
                }
            });
    }

    //update customer credit card
    updateCustomerCreditCard(customerCreditCard) {

        return models
            .sequelize
            .query('call customer_update_credit_card(:customer_id,:credit_card)', {
                replacements: {
                    customer_id: customerCreditCard.customer_id,
                    credit_card: customerCreditCard.credit_card
                }
            });
    }

    //created session token
    createSessionToken(customer) {
        let object = {
            customer: {
                schema: ""
            },
            accessToken: "",
            expires_in: ""
        }
        let payload = {
            customer_id: customer.customer_id,
            name: customer.name,
            email: customer.email
        }
        var signOptions = {
            expiresIn: "24h",
            algorithm: "HS256"
        };
        let token = jwt.sign(payload, config.CONFIG_TOKEN, signOptions);
        try {
            object.customer.schema = customer;
            object.accessToken = "Bearer " + token;
            object.expires_in = signOptions.expiresIn;
            return object;
        } catch (err) {
            error.message = err;
            return error;
        }

    }

}

module.exports = CustomerService;