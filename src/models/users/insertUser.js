import pool from "../../db/pool.js";


const insertUser = async ({
    name,
    email,
    hashedPassword,
    verificationCode,
  }) => {
    const [{ insertId }] = await pool.query(
      "INSERT INTO users (name, email, password, verificationCode) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, verificationCode]
    );
    return insertId;
  };

export default insertUser;