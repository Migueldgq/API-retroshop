import pool from "../../db/pool.js";

const searchProducts = async ({ name, category, sellerId, price, location }) => {
  const queryParams = [];
  let query = "SELECT * FROM products WHERE 1 = 1"; // Usamos WHERE 1 = 1 para concatenar condiciones  1=1 siempre es true y pasamos a valorar lo sig :
  // lo habia hecho distinto que el rollo and pero mejor asi xp no hay q
  // pensar donde pones el and ....

  if (name) {
    query += " AND name LIKE ?";
    queryParams.push(`%${name}%`);
  }

  if (category) {
    query += " AND category LIKE ?";
    queryParams.push(`%${category}%`);
  }

  // if (sellerId) {
  //   query += " AND sellerId = ?";
  //   queryParams.push(sellerId);
  // }
  // un beetween de precios ....
  if (price) {
    query += " AND price = ?";
    queryParams.push(price);
  }
  if (location) {
    query += " AND location = ?";
    queryParams.push(`%${location}%`);
  }

  
    const [rows] = await pool.query(query, queryParams);
    return rows;
};

export default searchProducts;
