//import Joi from "joi";
import {
  createReservation,
  getStatusByProductId,
} from "../../models/reservation/index.js";
import { selectProductById } from "../../models/products/index.js";
import { reservationEmail } from "../../utils/index.js";
import { generateError } from "../../utils/index.js";

const controllerReservation = async (req, res, next) => {
  try {
    const productId = req.params.productId; // Obtener productId de los parámetros de la consulta

    const buyOrder = new Date();

    const buyerId = req.user.id;

    const { seller } = await selectProductById(productId);
    const status = await getStatusByProductId(productId);
    console.log(seller.id);
    if (status) {
      generateError("El articulo tiene una solicitud pendiente", 400);
    } else if (seller.id === buyerId) {
      generateError("El articulo que intentas comprar es tuyo", 400);
    } else {
      const { reservationId, email, buyerEmail } = await createReservation(
        {
          buyOrder,
        },
        buyerId,
        productId // Pasar productId como parámetro
      );

      await reservationEmail(email, reservationId, productId);
      console.log(email);
      console.log(reservationId);
      console.log(buyerEmail);
      console.log("id de product", productId);
      res.status(201).json({
        id: reservationId,
        productId: productId,

        message: "Reserva creada exitosamente",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default controllerReservation;
