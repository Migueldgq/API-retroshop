import { getFavoriteProductsByUserId } from "../../models/favorites/index.js";

const controllerFavoriteProductsByUserId = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = await getFavoriteProductsByUserId(userId);
    res.status(201).json(data);
    console.log(data);
  } catch (error) {
    next(error);
  }
};

export default controllerFavoriteProductsByUserId;
