import pool from "../../db/pool.js";

const getFavoriteProductsByUserId = async (id) => {
  try {
    const [favoriteProducts] = await pool.query(
      "SELECT productId FROM favorites WHERE userId = ?",
      [id]
    );

    const favoriteProductIds = favoriteProducts.map(
      (favorite) => favorite.productId
    );

    const [products] = await pool.query(
      "SELECT * FROM products WHERE id IN (?);",
      [favoriteProductIds]
    );

    return {
      products,
    };
  } catch (error) {
    console.error(
      "Error al obtener los productos favoritos del usuario:",
      error
    );
    throw error;
  }
};

export default getFavoriteProductsByUserId;
