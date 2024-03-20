import pool from "../../db/pool.js";

//buscar producto por id
const selectReservationById = async (id) => {
  const [[product]] = await pool.query("SELECT * FROM products WHERE id = ?;", [id]);
  const [[seller]] = await pool.query("SELECT * FROM users WHERE id = ?;", [product.sellerId]);

  const [[reservation]] = await pool.query("SELECT * FROM reservation WHERE productId = ?;", [id]);

  return {
    product:product,
    seller:seller,
    reservation:reservation,
  };
};

export default selectReservationById;
