import { getStatusByProductId } from "../../models/reservation/index.js";

const controllerGetReserva = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const status = await getStatusByProductId(productId);
    
    // Verificar si existe un estado de reserva
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(200).json({status:" "});
    }
  } catch (error) {
    next(error);
  }
};

export default controllerGetReserva;
