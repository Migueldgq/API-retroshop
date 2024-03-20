import pool from "./pool.js";

export const dropDb = async () => {
  try {
    await pool.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME};`);

    console.log("¡Base de datos eliminada satisfactoriamente!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

dropDb();
