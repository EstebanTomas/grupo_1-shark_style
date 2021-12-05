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
                    };
                    products.push(product);
                })
                let countCategories = [
                    {
                        name: "Remeras",
                        amount: data[0]
                    },
                    {
                        name: "Musculosas",
                        amount: data[1]
                    },
                    {
                        name: "Pantalones Largos",
                        amount: data[2]
                    },
                    {
                        name: "Shorts",
                        amount: data[3]
                    },
                    {
                        name: "Calzas Termicas",
                        amount: data[4]
                    },
                    {
                        name: "Camperas",
                        amount: data[5]
                    },
                    {
                        name: "Buzos",
                        amount: data[6]
                    },
                    {
                        name: "Conjuntos",
                        amount: data[7]
                    }
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
                    detail: `http://localhost:3030/products/detail/${data.id}`,
                    colors: colorsArray,
                    sizes: sizesArray,
                    image: `http://localhost:3030/img/productImage/${data.images[0].img}`
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