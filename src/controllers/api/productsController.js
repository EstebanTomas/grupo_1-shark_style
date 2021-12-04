const db = require('../../database/models');
const sequelize = db.sequelize;

const productsController = {
    'list': (req, res) => {
        let remeras = db.Product.count({
            where: { category: "Remeras" }
        });
        let musculosas = db.Product.count({
            where: { category: "Musculosas" }
        });
        let pantalones_largos = db.Product.count({
            where: { category: "Pantalones Largos" }
        });
        let shorts = db.Product.count({
            where: { category: "Shorts" }
        });
        let calzas_termicas = db.Product.count({
            where: { category: "Calzas Termicas" }
        });
        let camperas = db.Product.count({
            where: { category: "Camperas" }
        });
        let buzos = db.Product.count({
            where: { category: "Buzos" }
        });
        let conjuntos = db.Product.count({
            where: { category: "Conjuntos" }
        });
        Promise.all([remeras, musculosas, pantalones_largos, shorts, calzas_termicas, camperas, buzos, conjuntos])
        .then(data => {
            db.Product.findAll()
            .then(allProducts => {
                let products = [];
                allProducts.forEach(data => {
                    let product = {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        gender: data.gender,
                        category: data.category,
                        detail: `/products/detail/${data.id}`
                    };
                    products.push(product);
                })
                let countCategories = [
                    {remeras: data[0]},
                    {musculosas: data[1]},
                    {pantalones_largos: data[2]},
                    {shorts: data[3]},
                    {calzas_termicas: data[4]},
                    {camperas: data[5]},
                    {buzos: data[6]},
                    {conjuntos: data[7]}
                ]
                res.status(200).json( {
                    meta: {
                        status:200,
                        count: products.length,
                        countByCategory: countCategories,
                        url: "api/products"
                    },
                    products
                })
            })
        })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['images', 'colors', 'sizes']
        })
            .then(data => {
                let colorsArray = [];
                data.colors.forEach(dataColor => {
                    let color = {
                        id: dataColor.id,
                        color: dataColor.color,
                        product_id: dataColor.product_id
                    };
                    colorsArray.push(color);
                })

                let sizesArray = {
                    id: data.sizes[0].id,
                    product_id: data.sizes[0].product_id,
                    xs: data.sizes[0].xs,
                    s: data.sizes[0].s,
                    m: data.sizes[0].m,
                    l: data.sizes[0].l,
                    xl: data.sizes[0].xl
                }

                let product = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    gender: data.gender,
                    category: data.category,
                    colors: colorsArray,
                    sizes: sizesArray,
                    image: `/img/productImage/${data.images[0].img}`
                };
                res.status(200).json( {
                    meta: {
                        status:200,
                        url: "api/products/:id"
                    },
                    product
                });
            });
    }
}

module.exports = productsController;