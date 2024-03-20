import pool from "../../db/pool.js";
import Joi from "joi";
import { generateError, purchaseConfirmationEmail } from "../../utils/index.js";
import {
  getReservationById,
  purchaseConfirmation,
} from "../../models/reservation/index.js";

const controllerPurchaseConfirmation = async (req, res, next) => {
  try {
    const { reservationLocation, reservationDate } = req.body;
    const { reservationId } = req.params;

    const schema = Joi.object().keys({
      reservationDate: Joi.date()
        .iso()
        .min(new Date(Date.now() + 86400000))
        .required(),
      reservationLocation: Joi.string().required(),
      reservationId: Joi.number().required(),
    });

    //const tomorrow = new Date(Date.now() + 86400000)

    const validation = schema.validate({
      reservationDate,
      reservationLocation,
      reservationId,
    });

    if (validation.error) {
      console.log(validation.error);
      generateError(validation.error.message, 400);
    }

    // Consulta para obtener el correo electrónico del vendedor

    const reservation = await getReservationById(reservationId);

    if (!reservation) {
      generateError("La reserva no existe", 404);
    }

    const [sellerId] = await pool.query(
      "SELECT products.sellerId = ? FROM reservation INNER JOIN products ON reservation.productId = products.id;",
      [reservation.productId]
    );

    const [completedReservations] = await pool.query(
      "SELECT * FROM reservation WHERE productId = ? AND status = 'finalizada'",
      [reservation.productId]
    );

    if (completedReservations.length > 0) {
      generateError("Este producto ya ha sido reservado", 400);
    }

    await purchaseConfirmation(
      reservationLocation,
      reservationDate,
      reservationId
    );

    const emailResult = await pool.query(
      `
    SELECT u.email 
    FROM users u
    INNER JOIN reservation r ON r.buyerId = u.id
    WHERE r.id = ?`,
      [reservationId]
    );

    if (!emailResult || !emailResult.length) {
      throw new Error("Correo electrónico del comprador no encontrado");
    }

    const [[{ productId }]] = await pool.query(
      `SELECT productId from reservation r WHERE r.id=?`,
      [reservationId]
    );

    //console.log('');
    // Seleccionar el correo electrónico del vendedor
    const buyerEmail = emailResult[0];
    const email = buyerEmail[0].email;
    await purchaseConfirmationEmail(
      email,
      reservationLocation,
      reservationDate,
      reservationId,
      productId
    );
    res.status(201).json({ message: " Compra confirmada con éxito" });
  } catch (error) {
    next(error);
  }
};

export default controllerPurchaseConfirmation;
