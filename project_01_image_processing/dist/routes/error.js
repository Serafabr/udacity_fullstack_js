"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_1 = require("../controllers/error");
// Get router
const router = express_1.default.Router();
// Routes
router.get('/error', error_1.errorControler);
exports.default = router;
