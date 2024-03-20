import pool from "../../db/pool.js";

const getAllProducts = async ({ limit }) => {
  let query = `SELECT 
  P.*
FROM
  products p
      LEFT JOIN
  reservation r ON p.id = r.productId
GROUP BY p.id
HAVING BIT_OR(r.status != 'finalizada' OR r.status is null)`;
  if (limit) {
    query += ` LIMIT ${limit}`;
  }
  const [rows] = await pool.query(query);
  //console.log(rows);
  return rows;
};

export default getAllProducts;
