import pool from "../../db/pool.js";

const purchaseConfirmation = async (
  reservationLocation,
  reservationDate,
  reservationId
) => {
  await pool.query(
    "UPDATE reservation SET reservationLocation = ? , reservationDate = ?, status = 'finalizada'  WHERE id = ? ",
    [reservationLocation, reservationDate, reservationId]
  );
};

export default purchaseConfirmation;
