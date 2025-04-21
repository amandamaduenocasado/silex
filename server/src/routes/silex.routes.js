const express = require("express");
const silexRoutes = express.Router();
const silexController = require("../controllers/silex.controller");

silexRoutes.get("/", silexController.getAllProducts);
silexRoutes.get("/:id", silexController.getProductsById);
silexRoutes.get("/size/:size", silexController.getProductsBySize);
silexRoutes.get("/diet/:diet", silexController.getProductsByDiet);
silexRoutes.get("/category/:category", silexController.getProductsByCategory);
silexRoutes.get("/vendor/:vendor", silexController.getProductsByVendor);
silexRoutes.get("/price/:end", silexController.getProductsByPrice);
silexRoutes.post("/", silexController.createProduct);
silexRoutes.patch("/:id", silexController.updateProduct);
silexRoutes.delete("/:id", silexController.deleteProduct);
silexRoutes.post("/many", silexController.createManyProducts);
silexRoutes.delete("/many/:price", silexController.deleteManyProducts);

module.exports = silexRoutes;
