import pool from "../../db/pool.js";

const updateReservationStatus = async (reservationId) => {
  await pool.query(
    "UPDATE reservation SET status = 'en proceso' WHERE id = ? ",
    [reservationId]
  );
};

export default updateReservationStatus;
