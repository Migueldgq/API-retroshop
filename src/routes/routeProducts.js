import express from "express";
import authenticateToken from "../middlewares/middleToken.js";
import {
  controllerSearchProducts,
  controllerGetProductsByUserId,
  controllerGetAllProducts,
  controllerCreateProductId,
  controllerModifyProduct,
  controllerDeleteProduct,
  controllerSelectProductById,
} from "../controllers/products/index.js";

const router = express.Router();
//Usuario anonimo vea todos los productos

router.get("/products", controllerGetAllProducts);

//Usuario vea sus productos
router.get("/products/user", authenticateToken, controllerGetProductsByUserId);

//Ver un producto en especifico
router.get("/products/product/", controllerSelectProductById);

router.get("/products/search", controllerSearchProducts);

//vincular id s producto solo pueden darlo de alta
router.post("/products/create", authenticateToken, controllerCreateProductId);

// Modificar producto
router.put("/products/:productid", authenticateToken, controllerModifyProduct);

//Eliminar producto
router.delete("/products/:id", authenticateToken, controllerDeleteProduct);

export default router;
