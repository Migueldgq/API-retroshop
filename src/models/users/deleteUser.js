import jwt from "jsonwebtoken";
import pool from "../../db/pool.js";

const deleteUser = async (user) => {
    const userPrune = await pool.query(``,[])
    return userPrune;
}
