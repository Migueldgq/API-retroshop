import pool from "../../db/pool.js";

const deleteReservation = async (id) => {
  const query = "DELETE FROM reservation WHERE id = ?";
  const [result] = await pool.query(query, [id]);

  return result;
};

export default deleteReservation;
