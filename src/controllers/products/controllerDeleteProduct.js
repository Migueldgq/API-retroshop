import {
  deleteProduct,
  selectProductById,
} from "../../models/products/index.js";
import getStatusByProductId from "../../models/reservation/getStatusByProductId.js";
import generateError from "../../utils/generateError.js";

const controllerDeleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const loggedUserId = req.user.id;

    const {product} = await selectProductById(id);
    const status = await getStatusByProductId(product.id);
    console.log(status);
    if (!product) {
      generateError("El producto no existe", 400);
    }
    if(status) {
      return res.status(400).json({ error:"el articulo tiene una reserva"})
    }
    if (product.sellerId !== loggedUserId) {
      return res.status(400).json({ error:"No eres el propietario de este producto"});
    }

    const data = await deleteProduct(id);
    if (!data) {
      // por si el productId no existe o no se ha creado
      generateError("Producto no Encontrado", 404);
    }
    res.status(200);
    res.json({
      id: id,
      message: "Producto eliminado exitosamente",
    });
  } catch (error) {
    next(error);
  }
};

export default controllerDeleteProduct;
