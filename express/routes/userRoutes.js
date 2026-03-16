const express = require("express");

const route = express.Router()

const userController = require("../controllers/userController");

route.get("/reqQuery", userController.QueryParam)

route.get("/dyParam/:id/:role", userController.dynamicRoute);

route.get("/", userController.home);

route.get("/get/users", userController.getUsers);

route.get("/get/users/:id", userController.getUserById);

// route.post("/add/users", userController.)

module.exports = route;