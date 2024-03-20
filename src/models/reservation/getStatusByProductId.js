import pool from "../../db/pool.js";
const getStatusByProductId = async (productId) => {
    try {
      const [[status]] = await pool.query(
        "SELECT status FROM reservation WHERE productId = ?",
        [productId]
      );
      return status;
    } catch (error) {
      console.error("Error al obtener el estado por productId:", error);
      throw error; // Lanza el error para que pueda ser manejado en el controlador
    }
  };
  
  export default getStatusByProductId