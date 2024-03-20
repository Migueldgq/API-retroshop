import pool from "../../db/pool.js";


const reviewUser = async ( req, res ,next) =>{

    try{
        const id = req.params.id

        const [[average]] = await pool.query(
            `SELECT ROUND(AVG(r.review), 0) AS average
            FROM products AS p
            JOIN reservation AS r ON p.id = r.productId
            WHERE p.sellerId = (SELECT id FROM users WHERE id = ?)`,
            [id]
        )
        res.json(average);
    } catch (error) {
      next(error);
    }
  };

  export default reviewUser;