import pool from "../../db/pool.js";

const deleteProduct = async (id) => {
  const query = "DELETE FROM products WHERE id = ?";
  const [result] = await pool.query(query, [id]);

  return result;
};

export default deleteProduct;
