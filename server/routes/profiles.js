import express from "express";
import {
  getProfiles,
  createProfile,
  deleteProfile,
  updateProfile,
} from "../controllers/profiles.js";
import { verifyToken } from "../middlewares/tokenVerifer.js";

const router = express.Router();
router.get("/", verifyToken, getProfiles);
router.post("/create", verifyToken, createProfile);
router.get("/delete/:id", verifyToken, deleteProfile);
router.post("/update", verifyToken, updateProfile);
export default router;
