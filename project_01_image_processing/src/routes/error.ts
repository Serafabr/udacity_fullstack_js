import express from "express";
import { errorControler } from "../controllers/error";

// Get router
const router = express.Router();

// Routes
router.get("/error", errorControler);

export default router;
