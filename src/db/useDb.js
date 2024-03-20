import pool from "./pool.js";

const useDb = async () => {
  try {
    await pool.query(`USE ${process.env.DB_NAME};`);
  } catch (error) {
    console.error(
      `La base de datos ${process.env.DB_NAME} no existe. Ejecuta el initDb para iniciarla`
    );
    process.exit(1);
  }
};

export default useDb;
