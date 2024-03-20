import pool from "../../db/pool.js";

const updateProduct = async ({
  id,
  name,
  category,
  price,
  location,
  imageURL,
  imageURL2,
  description,
}) => {
  const queryParams = [];
  let query = "UPDATE products SET";

  if (name) {
    query += " name = ?,";
    queryParams.push(name);
  }

  if (category) {
    query += " category = ?,";
    queryParams.push(category);
  }

  if (price) {
    query += " price = ?,";
    queryParams.push(price);
  }

  if (location) {
    query += " location = ?,";
    queryParams.push(location);
  }

  if (imageURL) {
    query += " imageURL = ?,";
    queryParams.push(imageURL);
  }
  if (imageURL2) {
    query += " imageURL2 = ?,";
    queryParams.push(imageURL2);
  }

  if (description) {
    query += " description = ?,";
    queryParams.push(description);
  }

  // Eliminar la última coma si existe
  query = query.endsWith(",") ? query.slice(0, -1) : query;

  query += " WHERE id = ?";
  queryParams.push(id);

  const result = await pool.query(query, queryParams);
  return result.affectedRows > 0; // Devuelve true si se actualizaron filas propiedad nodde mysql
};

export default updateProduct;
