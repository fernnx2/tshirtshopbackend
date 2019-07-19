var models = require('../models/index');
var shortid = require('shortid');
class ShoppingCartService {

    //generate cartId
    generateCartId(){
        return shortid.generate();
    }

    //add product shopping cart
    async shoppingCartAddProduct(product){
            return models.sequelize.query('call shopping_cart_add_product(:inCartId,inProductId,inAttributes)',{
                replacements:{
                    inCartId:product.cart_id,
                    inProductId:product.product_id,
                    inAttributes:product.attributes
                }
            })
    }

    //get cart products list
    getShoppingCart(cart_id){
            return models.sequelize.query('call shopping_cart_get_products(:inCartId)',{
                replacements:{
                    inCartId:cart_id
                }
            });
    }

    //update shopping cart
    updateShoppingCart(cart){
            return models.sequelize.query('call shopping_cart_update(:inItemId,inQuantity)',{
                replacements:{
                    inItemId:cart.item_id,
                    inQuantity: cart.quantity
                }
            });
    }


    //empty products cart
    deleteShoppingCart(cart_id){
            return models.sequelize.query('call shopping_cart_empty(:inCartId)',{
                replacements:{
                    inCartId:cart_id
                }
            });
    }

     //move products cart
     moveProductsShoppingCart(item_id){
            return  models.sequelize.query('call shopping_cart_move_product_to_cart(:inItemId)',{
                replacements:{
                    inItemId:item_id
                }
            });
    }

      //get total amount cart
      getTotalAmountShoppingCart(cart_id){
            return  models.sequelize.query('call shopping_cart_get_total_amount(:inCartId)',{
                replacements:{
                    inCartId:cart_id
                }
            });
    }

    //get save products
    getSavedForLater(cart_id){
        return  models.sequelize.query('call shopping_cart_saved_product_for_later(:inItemId)',{
            replacements:{
                inItemId:cart_id
            }
        }); 
}

    //get save products
     getSavedProducts(cart_id){
            return  models.sequelize.query('call shopping_cart_get_saved_products(:inCartId)',{
                replacements:{
                    inCartId:cart_id
                }
            }); 
    }

    //remove product
     removeProduct(item_id){
            return  models.sequelize.query('call shopping_cart_remove_product(:inItemId)',{
                replacements:{
                    inItemId:item_id
                }
            });
    }


}

module.exports = ShoppingCartService;