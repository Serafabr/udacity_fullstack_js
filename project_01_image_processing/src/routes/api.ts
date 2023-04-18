import express from "express";
import { apiImageController } from "../controllers/api";

// Get router
const router = express.Router();

// Routes
router.get("/images", apiImageController);

export default router;
