import express from "express";
import authenticateToken from "../middlewares/middleToken.js";

import {
  login,
  profile,
  register,
  verify,
  getUser,
  reviewUser,
} from "../controllers/users/index.js";

const router = express.Router();

router.post("/register", register);

router.post("/verify", verify);

router.post("/login", login);

router.get("/getUser", authenticateToken, getUser);
router.get("/getAverage/:id", reviewUser);

router.put("/profile", authenticateToken, profile);

export default router;
