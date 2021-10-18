const fs = require('fs');
const { devNull } = require('os');

const functionalities = {
data: function () {
    return JSON.parse(fs.readFileSync("./data/products.json", { encoding: "utf-8" }));
},
findThemAll:function () {
    return this.data;
},
generatorOfId: function (id) {
    let allProducts = this.findThemAll();
    let lastProducts = allProducts.pop();
    return lastProducts.id
}
}


module.exports = functionalities;