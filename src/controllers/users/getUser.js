import GetUserById from "../../models/users/getUserById.js";

/// trae todos lo productos
const getUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await GetUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default getUser;
