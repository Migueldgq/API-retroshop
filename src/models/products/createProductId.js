import pool from "../../db/pool.js";

const createProductId = async (
  productData,
  finalFileName,
  finalFileName2,
  sellerId
) => {
  const { name, category, price, location, description } = productData;

  const query =
    "INSERT INTO products (name, category, price, location, imageURL, imageURL2, description, sellerId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const [result] = await pool.query(query, [
    name,
    category,
    price,
    location,
    finalFileName,
    finalFileName2,
    description,
    sellerId,
  ]);

  console.log(productData.name);

  return result.insertId;
};

export default createProductId;
