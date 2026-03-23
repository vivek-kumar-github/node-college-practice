const express = require("express");

const Router = express.Router();

const authController = require("../controllers/authController");

Router.get("/auth", authController.getAuthToken);

module.exports = Router;