import express from "express";
import authenticateToken from "../middlewares/middleToken.js";
import { controllerGetReserva, controllerPurchaseConfirmation, controllerReservation, controllerGetReservations} from "../controllers/reservation/index.js";
import controllerGetReservationsSeller from "../controllers/reservation/controllerGetReservationSeller.js";
import controllerInsertReview from "../controllers/reservation/controllerInsertReview.js";
import {controllerDeleteReservation} from "../controllers/reservation/index.js"



const router = express.Router();

router.post("/reservation/:productId", authenticateToken ,controllerReservation);

router.put("/review/:productId",authenticateToken,controllerInsertReview)


//COMPRA HECHA 
router.patch('/products/purchaseConfirmation/:reservationId',authenticateToken, controllerPurchaseConfirmation)

//ver todas las reservas del usuario logeado
router.get("/reservations", authenticateToken, controllerGetReservations)
router.get("/reservationsSeller", authenticateToken, controllerGetReservationsSeller)
router.get("/reservaStatus/:productId", authenticateToken, controllerGetReserva)
//Eliminar reserva
router.delete("/reservation/:id", authenticateToken, controllerDeleteReservation);

export default router;