const express = require("express");
const addProduct = require("../controllers/productControllers");
const routes = express.Router();

routes.get("/getProduct", addProduct);

module.exports = routes;
