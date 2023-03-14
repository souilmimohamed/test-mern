import express from "express";
import { createProduct, getProducts } from "../controllers/product.js";
import { verifyToken } from "../middlewares/tokenVerifer.js";

const router = express.Router();
router.post("/createProduct", verifyToken, createProduct);
router.get("/list", getProducts);
export default router;
