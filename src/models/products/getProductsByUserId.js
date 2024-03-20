import pool from "../../db/pool.js";

const getProductsByUserId = async (userId) => {
  const query = "SELECT * FROM products WHERE sellerId = ?";
  const [rows] = await pool.query(query, [userId]);
  return rows;
};

export default getProductsByUserId;
