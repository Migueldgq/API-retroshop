import pool from "../../db/pool.js";
// controlado con el que extraigo todos los datos necesarios para mostrar una reserva en este caso vemos en el SQL que me traigo todo de las tablas products, reservations y me traigo el nombre, email e imagen de perfil del comprador por ultimo estos datos se traen en base al id del comprador
const controllerGetReservations = async (req, res, next) => {
  try {
    const loggedUserId = req.user.id;
    const [userReservations] = await pool.query(
      `Select p.*, r.*,u.name buyerName, u.email, u.avatarURL  from reservation r JOIN products p ON r.productId = p.id JOIN users u ON r.buyerId = u.id  WHERE buyerId = ?`,
      [loggedUserId]
    );
    res.json({ data: userReservations });
  } catch (error) {
    next(error);
  }
};

export default controllerGetReservations;
