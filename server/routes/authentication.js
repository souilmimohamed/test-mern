import express from "express";
import { Login } from "../controllers/authentication.js";
import { getUserData } from "../controllers/authentication.js";
import { verifyToken } from "../middlewares/tokenVerifer.js";
const router = express.Router();
router.post("/login", Login);
router.get("/getUserData", verifyToken, getUserData);

export default router;
