import express from "express"
import { createImage, getGalleryImages } from "../controllers/gallery.controller.js";

const router = express.Router();

router.post("/createImage", createImage);
router.get("/getGalleryImages", getGalleryImages);

export default router;