"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const frontend_1 = __importDefault(require("../controllers/frontend"));
// Get router
const router = express_1.default.Router();
// GET Routes
router.get('/', frontend_1.default.getMainPage);
router.get('/upload', frontend_1.default.getUploadPage);
router.get('/resize/:imgPath', frontend_1.default.getImagePage);
// POST Routes
router.post('/upload', frontend_1.default.postImage);
exports.default = router;
