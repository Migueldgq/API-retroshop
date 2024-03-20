import generateError from "../../utils/generateError.js";
import {
  deleteFavorite,
  getFavoriteProductsByUserId,
} from "../../models/favorites/index.js";

const controllerDeleteFavorite = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;
    // Obtengo la lista de productos favoritos del usuario
    const favoriteProducts = await getFavoriteProductsByUserId(userId);
    //console.log(favoriteProducts.products);
    const favoriteProductIds = favoriteProducts.products.map(
      (product) => product.id
    );

    // Verifico si el producto está en la lista de favoritos
    if (!favoriteProductIds.includes(productId)) {
      throw new Error(
        "El producto no está en la lista de favoritos del usuario"
      );
    }

    // Elimino el producto de la lista de favoritos
    await deleteFavorite(userId, productId);

    res.status(201).json({
      message: "Producto eliminado de favoritos correctamente",
      productId: productId,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerDeleteFavorite;
