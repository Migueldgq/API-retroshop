import pool from "../../db/pool.js";

const getIdReservation = async (productId) =>{
    const [[id]] = await pool.query(
       " SELECT id FROM reservation WHERE productId = ? " ,
       [productId]
    );
    return id
}

export default getIdReservation;