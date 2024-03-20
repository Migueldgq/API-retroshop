import { searchProducts } from "../../models/products/index.js";
import Joi from "joi";
import generateError from "../../utils/generateError.js";

//  BUSCADOR por body quizas mejor por params ... va bien
const controllerSearchProducts = async (req, res, next) => {
  try {
    const { name, category, /*sellerId,*/ price, location } = req.query;
    console.log("Datos de búsqueda:", {
      name,
      category,
      // sellerId,
      price,
      location,
    });
    
    console.log("este ess el req query", req.query);
    // pendiente de ver si necesita JOI
    //JOIII
    const allowedCategories = [
      "consola",
      "ordenador",
      "radio",
      "televisor",
      "movil",
      "videojuego",
    ];
    const schema = Joi.object().keys({
      name: Joi.string().min(1).max(150),
      category: Joi.string().valid(...allowedCategories),
      price: Joi.number().integer().positive().min(1).max(1000000),
      location: Joi.string(),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      generateError(validation.error.message);
    }

    const products = await searchProducts(req.query);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export default controllerSearchProducts;
