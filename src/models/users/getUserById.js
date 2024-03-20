import pool from "../../db/pool.js";

const GetUserById = async (userId) => {
  
  const query = "SELECT * FROM users WHERE users.id = ?";
  const [rows] = await pool.query(query, userId);
  return rows[0];
};

export default GetUserById;