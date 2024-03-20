import pool from "../../db/pool.js";

//buscar producto por id
const selectProductById = async (id) => {
  const [[product]] = await pool.query("SELECT * FROM products WHERE id = ?;", [id]);
  const [[seller]] = await pool.query("SELECT * FROM users WHERE id = ?;", [product.sellerId]);

  const [reservas] = await pool.query("SELECT * FROM reservation WHERE productId = ?;", [id]);

  // Verificar si hay resultados de reserva
  const reservation = reservas.length ? reservas[0] : { status: "sin reservas" };

  return {
    product:product,
    seller:seller,
    reservation:reservation,
  };
};

export default selectProductById;
