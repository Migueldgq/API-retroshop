import { selectProductById } from "../../models/products/index.js";

const controllerSelectProductById = async (req, res, next) => {
  try {
    const productId = req.query.id;
    if (!productId) {
        // por si no hay un productId
        return res.status(400).json({ error: "se necesita un ID de producto" });
      }
    const data = await selectProductById(productId);
    if (!data) {
        // por si el productId no existe o no se ha creado
        return res.status(404).json({ error: "Producto no Encontrado" });
      }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default controllerSelectProductById;
