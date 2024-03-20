import express from "express";
import authenticateToken from "../middlewares/middleToken.js";

import {
  controllerInsertFavorite,
  controllerFavoriteProductsByUserId,
  controllerDeleteFavorite,
} from "../controllers/favorites/index.js";

const router = express.Router();

router.get("/favorites", authenticateToken, controllerFavoriteProductsByUserId);
router.post("/favorites/add", authenticateToken, controllerInsertFavorite);
router.patch("/favorites/delete", authenticateToken, controllerDeleteFavorite);

export default router;
