import express from "express";
import frontendController from "../controllers/frontend";

// Get router
const router = express.Router();

// GET Routes
router.get("/", frontendController.getMainPage);
router.get("/upload", frontendController.getUploadPage);
router.get("/resize/:imgPath", frontendController.getImagePage);
// POST Routes
router.post("/upload", frontendController.postImage);

export default router;
