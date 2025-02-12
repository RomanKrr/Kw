import express from "express"
import { createProduct, deleteProduct, getAllOrders, getAllProducts } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAllOrders", getAllOrders);
router.get("/getAllOrders", getAllOrders);
router.delete("/:id", deleteProduct);

export default router;