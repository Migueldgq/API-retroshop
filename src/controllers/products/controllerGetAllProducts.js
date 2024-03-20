import { getAllProducts } from "../../models/products/index.js";


/// trae todos lo productos
const controllerGetAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProducts(req.query);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export default controllerGetAllProducts;
