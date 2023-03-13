import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
import { verifyToken } from "../middlewares/tokenVerifer.js";

const router = express.Router();
router.get("/", verifyToken, getUsers);
router.post("/createUser", createUser);
router.get("/delete/:id", verifyToken, deleteUser);
router.post("/update", verifyToken, updateUser);
export default router;
