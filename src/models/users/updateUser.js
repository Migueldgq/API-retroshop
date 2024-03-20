import pool from "../../db/pool.js";


const updateUser = async ({ id, name, biography, password,avatarURL }) => {
  const queryParams = [];
  let query = "UPDATE users SET";

  if (name) {
    query += " name = ?,";
    queryParams.push(name);
  }

  if (biography) {
    query += " biography = ?,";
    queryParams.push(biography);
  }
  if (password) {
    query += " password = ?,";
    queryParams.push(password);
  }
  if (avatarURL) {
    query += " avatarURL = ?,";
    queryParams.push(avatarURL);
  }

  // Eliminar la última coma si existe
  query = query.endsWith(",") ? query.slice(0, -1) : query;

  query += " WHERE id = ?";
  queryParams.push(id);

  const result = await pool.query(query, queryParams);
  return result.affectedRows > 0; // Devuelve true si se actualizaron filas propiedad nodde mysql
};

export default updateUser;
