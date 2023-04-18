"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../controllers/api");
// Get router
const router = express_1.default.Router();
// Routes
router.get('/images', api_1.apiImageController);
exports.default = router;
