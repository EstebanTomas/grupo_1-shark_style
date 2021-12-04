const db = require('../../database/models');
const sequelize = db.sequelize;

const productShopController = {
    'list': (req, res) => {
        db.ProductShop.findAll()
        .then(allProductShop => {
            let products_shop = [];
            allProductShop.forEach(data => {
                let product_shop = {
                    id: data.id,
                    product_id: data.product_id,
                    size: data.size,
                    color: data.color,
                    amount: data.amount,
                    subtotal: data.subtotal
                };
                products_shop.push(product_shop);
            })
            res.status(200).json( {
                meta: {
                    status:200,
                    count: products_shop.length,
                    url: "api/products_shop"
                },
                products_shop
            })
        })
    }
}

module.exports = productShopController;