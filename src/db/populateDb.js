import pool from "./pool.js";
import useDb from "./useDb.js";

import products from "./backups/marta/products.json" assert { type: "json" };
import users from "./backups/marta/users.json" assert { type: "json" };
import favorites from "./backups/marta/favorites.json" assert { type: "json" };
import reservations from "./backups/marta/reservations.json" assert { type: "json" };

// console.log(products);
// console.log(users);
// console.log(favorites);
// console.log(reservations);

export const populateDb = async () => {
  try {
    await useDb();

    const MappedProducts = products.map((product) => {
      //console.log("Product:", product);
      return [
        product.id,
        product.name,
        product.category,
        product.price,
        product.location,
        product.imageURL,
        product.imageURL2,
        product.description,
        product.sellerId,
      ];
    });

    const MappedUsers = users.map((user) => {
      //console.log("users", user);
      return [
        user.id,
        user.name,
        user.email,
        user.password,
        user.avatarURL,
        user.biography,
        user.verificationCode,
        user.isEmailValidated,
      ];
    });

    const MappedFavorites = favorites.map((favorite) => {
      //console.log("favorites", favorite);
      return [favorite.id, favorite.userId, favorite.productId];
    });

    // const MappedReservations = reservations.map((reservation) => {
    //   console.log("reservations", reservation);
    //   return [
    //     reservation.id,
    //     reservation.buyOrder,
    //     reservation.reservationLocation,
    //     reservation.reservationDate,
    //     reservation.status,
    //     reservation.review,
    //     reservation.buyerId,
    //     reservation.productId,
    //   ];
    // });

    const insertUsersQuery = `INSERT INTO users (id, name,email,password,avatarURL,biography,verificationCode,isEmailValidated) VALUES ?`;

    await pool.query(insertUsersQuery, [MappedUsers]);

    ///////////////////////////////////////////////////////////////////////////

    const insertProductsQuery = `INSERT INTO products (id, name,category,price, location,  imageURL, imageURL2,description,  sellerId) VALUES ?`;

    await pool.query(insertProductsQuery, [MappedProducts]);

    ///////////////////////////////////////////////////////////////////////////

    const insertFavoritesQuery = `INSERT INTO favorites (id, userId, productId) VALUES ?`;

    await pool.query(insertFavoritesQuery, [MappedFavorites]);

    ////////////////////////////////////////////////////////////////////////////

    // const insertReservationsQuery = `INSERT INTO reservation (id, buyOrder, reservationLocation, reservationDate, status, review, buyerId, productId) VALUES ?`;

    // await pool.query(insertReservationsQuery, [MappedReservations]);

    ////////////////////////////////////////////////////////////////////////////////

    console.log(`Base de datos poblada correctamente`);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

populateDb();
