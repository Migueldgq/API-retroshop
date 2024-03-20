import {
  modifyProduct,
  selectProductById,
} from "../../models/products/index.js";
import { generateError } from "../../utils/index.js";
import { getStatusByProductId } from "../../models/reservation/index.js";
import Joi from "joi";

const controllerModifyProduct = async (req, res, next) => {
  try {
    const { name, category, price, location, description } = req.body;
    const loggedUserId = req.user.id;
    const id = req.params.productid;

    const allowedCategories = [
      "consola",
      "ordenador",
      "radio",
      "videojuegos",
      "movil",
      "otros",
    ];

    const schema = Joi.object().keys({
      name: Joi.string().min(1).max(80),
      category: Joi.string()
        .valid(...allowedCategories),
       
      price: Joi.number().min(0),
      location: Joi.string(),
      description: Joi.string(),
      avatar: Joi.optional(),
      avatar2: Joi.optional(),
      
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      generateError(validation.error.message);
    }
    const product = await selectProductById(id);

    if (!product) {
      generateError("El producto no existe", 404);
    }

    if (product.seller.id !== loggedUserId) {
      generateError("No eres el propietario de este producto", 403);
    }

    const status = await getStatusByProductId(id);

    if (status) {
      generateError("en proceso de venta", 403);
      };
    

    const productDataToUpdate = {};

    if (name) {
      productDataToUpdate.name = name;
    }

    if (category) {
      productDataToUpdate.category = category;
    }

    if (price) {
      productDataToUpdate.price = price;
    }

    if (location) {
      productDataToUpdate.location = location;
    }

    if (req.files?.avatar) {
      const file = req.files.avatar;
      const finalFileName = Date.now() + "-" + file.name;
      file.mv(`./uploads/${finalFileName}`);
      productDataToUpdate.imageURL = finalFileName;
    }

    if (req.files?.avatar2) {
      const file2 = req.files.avatar2;
      const finalFileName2 = Date.now() + "-" + file2.name;
      file2.mv(`./uploads/${finalFileName2}`);
      productDataToUpdate.imageURL2 = finalFileName2;
    }

    if (description) {
      productDataToUpdate.description = description;
    }

    await modifyProduct({ id, ...productDataToUpdate });

    res.status(200).json({
      message: "Producto actualizado correctamente",
      data: { id, ...productDataToUpdate },
    });
  } catch (error) {
    next(error);
  }
};

export default controllerModifyProduct;
