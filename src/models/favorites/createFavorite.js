import pool from "../../db/pool.js";

const createFavorite = async (userId, productId) => {
  const [{ insertId }] = await pool.query(
    "INSERT INTO favorites ( userId, productId) VALUES (?,?)",
    [userId, productId]
  );
  return insertId;
};

export default createFavorite;
