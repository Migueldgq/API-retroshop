import pool from "../../db/pool.js";

const createReservation = async (reservationData, buyerId, productId, ) => {
  try {
    const { buyOrder } =
      reservationData;

    // Consulta para insertar la reserva
    const insertQuery =
      "INSERT INTO reservation (buyOrder, buyerId, productId) VALUES (?, ?, ?)";
    const [result] = await pool.query(insertQuery, [
      buyOrder,
      buyerId,
      productId
    ]);

    if (!result || !result.insertId) {
      throw new Error("Error al crear la reserva");
    }

    const reservationId = result.insertId;

    // Consulta para obtener el correo electrónico del vendedor
    const selectQueryBuyerEmail = `
    SELECT u.email 
    FROM users u
    
    WHERE u.id = ?`;

    const emailBuyer = await pool.query(selectQueryBuyerEmail, [buyerId]);

    if (!emailBuyer || !emailBuyer.length) {
      throw new Error("Correo electrónico del comprador no encontrado");
    }

    // Seleccionar el correo electrónico del comprador
    const emailB = emailBuyer[0];
    const buyerEmail = emailB[0].email;


    // Consulta para obtener el correo electrónico del vendedpr
    const selectQuery = `
    SELECT u.email 
    FROM users u
    INNER JOIN products p ON p.sellerId = u.id
    WHERE p.id = ?`;

    const emailResult = await pool.query(selectQuery, [productId]);

    if (!emailResult || !emailResult.length) {
      throw new Error("Correo electrónico del vendedor no encontrado");
    }

    // Seleccionar el correo electrónico del vendedor
    const patata = emailResult[0];
    const email = patata[0].email;
    
   
    // Devolver el ID de la reserva y el correo electrónico del vendedor
    return {
      reservationId,
      email,
      buyerEmail
    };
  } catch (error) {
    throw new Error(`Error al crear la reserva: ${error.message}`);
  }
};

export default createReservation;
