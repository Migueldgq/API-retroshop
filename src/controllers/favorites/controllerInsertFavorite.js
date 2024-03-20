import generateError from "../../utils/generateError.js";
import { createFavorite } from "../../models/favorites/index.js";
import selectProductById from "../../models/products/selectProductById.js";

const controllerInsertFavorite = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;
    await createFavorite(userId, productId);
    const data = await selectProductById(productId);
    res.status(201).json({
      message: "Producto añadido a favoritos correctamente",
      product: data.product,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerInsertFavorite;
