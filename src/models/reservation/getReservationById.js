import pool from "../../db/pool.js";

const getReservationById = async (reservationId) => {
  const [[reservation]] = await pool.query(
    "SELECT * FROM reservation WHERE id = ?",
    [reservationId]
  );
  return reservation;
};

export default getReservationById;
