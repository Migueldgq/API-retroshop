import pool from "../../db/pool.js";

const deleteFavorite = async (userId, productId) => {
  const deleteId = await pool.query(
    "DELETE FROM favorites WHERE userId = ? AND productId = ?",
    [userId, productId]
  );
  if (deleteId.affectedRows === 0) {
    throw new Error("No se encontró el favorito para eliminar");
  }
};

export default deleteFavorite;
