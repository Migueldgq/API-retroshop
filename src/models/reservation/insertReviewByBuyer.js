import pool from "../../db/pool.js";

async function insertReviewByBuyer(id, review, buyerId) {
  try {
   
  
    await pool.query(`
    UPDATE reservation 
    SET review = ?
    WHERE id = ? AND buyerId = ? ;
  `, [review, id, buyerId]);
    console.log(review);
    return{ review, id,buyerId}; 
  } catch (error) {
    console.error("Error al insertar la revisión:", error);
    return false; // Indicador de fallo en la inserción
  }
}

export default insertReviewByBuyer;