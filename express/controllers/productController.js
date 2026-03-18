const products = require("../modules/productModules");

exports.getProducts = (req, res) => {
    res.json(products);
}