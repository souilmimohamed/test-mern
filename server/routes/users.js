import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  updateUserProfiles,
} from "../controllers/users.js";
import { verifyToken } from "../middlewares/tokenVerifer.js";

const router = express.Router();
router.get("/", verifyToken, getUsers);
router.post("/create", verifyToken, createUser);
router.get("/delete/:id", verifyToken, deleteUser);
router.post("/update", verifyToken, updateUser);
router.post("/updateProfile", verifyToken, updateUserProfiles);
export default router;
