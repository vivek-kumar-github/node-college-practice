const express = require("express");

const route = express.Router()

const userController = require("../controllers/userController");

route.get("/get/users", userController.getUsers);

route.get("/get/users/:id", userController.getUserById);

// route.post("/add/users", userController.)

module.exports = route;