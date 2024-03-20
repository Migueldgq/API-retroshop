import { createProductId } from "../../models/products/index.js";
import Joi from "joi";
import { v4 as uuidv4 } from "uuid";
import generateError from "../../utils/generateError.js";

// crear product engarzandolo con id user  //
// token y rollos ??
// revisar enviar por params?
const controllerCreateProductId = async (req, res, next) => {
  try {
    const productData = req.body;
    const sellerId = req.user.id;
    const file = req.files.avatar;
    const file2 = req.files.avatar2;

    const finalFileName = uuidv4() + "-" + file.name;
    file.mv(`./uploads/${finalFileName}`);

    
    const finalFileName2 = uuidv4() + "-" + file2.name;
    file2.mv(`./uploads/${finalFileName2}`);

    // JOII
    const allowedCategories = [
      "consola",
      "ordenador",
      "radio",
      "videojuegos",
      "movil",
      "otros",
    ];
    const schema = Joi.object().keys({
      name: Joi.string().min(1).max(80).required(),
      category: Joi.string()
        .valid(...allowedCategories)
        .required(),
      price: Joi.number().min(0).required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
      avatar: Joi.optional(),
      avatar2: Joi.optional(),
      
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      generateError(validation.error.message);
    }

    

   


    const productId = await createProductId(
      productData,
      finalFileName,
      finalFileName2,
      sellerId
    );
    res
      .status(201)
      .json({ id: productId, message: "Producto creado exitosamente" });
  } catch (error) {
    next(error);
  }
};

export default controllerCreateProductId;
