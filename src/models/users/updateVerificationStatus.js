import pool from "../../db/pool.js";

const updateVerificationStatus = async (email) => {
  await pool.query("UPDATE users SET isEmailValidated = true WHERE email = ?", [
    email,
  ]);
};

export default updateVerificationStatus;
