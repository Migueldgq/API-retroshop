
// En controllerInsertReview.js
import { getIdReservation, insertReviewByBuyer } from "../../models/reservation/index.js";

import { generateError } from "../../utils/index.js";


const controllerInsertReview = async (req, res, next) => {
    try {
        const {review} = req.body
        const productId = req.params.productId;
        const buyerId = req.user.id;

        console.log("voto guay", review);
        console.log("producto a modificar", productId);
        console.log("sujeto", buyerId);

        const { id } = await getIdReservation(productId);
        console.log("RESERVA", id);

        const data = await insertReviewByBuyer(id, review, buyerId);

        res.status(200).json({
            message: "reserva valorada",
            data: data
        });
    } catch (error) {
        next(error);
    }
}

export default controllerInsertReview;




