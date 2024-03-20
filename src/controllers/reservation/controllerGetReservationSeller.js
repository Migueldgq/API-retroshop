import pool from "../../db/pool.js";
// controlado con el que extraigo todos los datos necesarios para mostrar una reserva en este caso vemos en el SQL que me traigo todo de las tablas products, reservations y me traigo el nombre, email e imagen de perfil del comprador por ultimo estos datos se traen en base al id del comprador
const controllerGetReservationsSeller = async (req, res, next) => {
  try {
    const loggedUserId = req.user.id;
    const [userReservations] = await pool.query(
      `SELECT 
      p.*,
      IFNULL(r.status, 'sin reserva') AS status,
      r.id AS reserva,
      r.review AS review,
      u.name AS seller_name
  FROM 
      products p
  LEFT JOIN 
      reservation r ON p.id = r.productId
  LEFT JOIN 
      users u ON p.sellerId = u.id
  WHERE 
      p.sellerId  = ?`,
      [loggedUserId]
    );
    res.json({ data: userReservations });
  } catch (error) {
    next(error);
  }
};

export default controllerGetReservationsSeller;
