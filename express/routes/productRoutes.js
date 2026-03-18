const express = require("express");

const route = express.Router();

const productController = require("../controllers/productController");

route.get("/products", productController.getProducts)

module.exports = route;