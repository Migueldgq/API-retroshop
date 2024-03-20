import selectReservationById from "../../models/reservation/selectReservationById.js"
import deleteReservation from "../../models/reservation/deleteReservation.js" ;
import getStatusByProductId from "../../models/reservation/getStatusByProductId.js";
import generateError from "../../utils/generateError.js";

const controllerDeleteReservation = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const loggedUserId = req.user.id;

    const {reservation, product} = await selectReservationById(id);
    const status = await getStatusByProductId(id);
    
    if (!reservation) {
      generateError("No hay reserva", 400);
    }
    if(status === "finalizada") {
      return res.status(400).json({ error:"el articulo no tiene una reserva"})
    }
    if (product.sellerId !== loggedUserId) {
      return res.status(400).json({ error:"No eres el propietario de este producto"});
    }

    const data = await deleteReservation(reservation.id);
    if (!data) {
      // por si el productId no existe o no se ha creado
      generateError("Reserva no Encontrada", 404);
    }
    res.status(200);
    res.json({
      id: id,
      message: "Reserva eliminada exitosamente",
    });
  } catch (error) {
    next(error);
  }
};

export default controllerDeleteReservation;
