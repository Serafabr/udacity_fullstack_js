"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDir = exports.thumbDir = exports.imagesDir = exports.publicDir = void 0;
const path_1 = __importDefault(require("path"));
// Directory
exports.publicDir = path_1.default.join(__dirname, "..", "..", "public");
exports.imagesDir = path_1.default.join(__dirname, "..", "..", "images");
exports.thumbDir = path_1.default.join(__dirname, "..", "..", "thumbnail");
exports.logDir = path_1.default.join(__dirname, "..", "..", "logs");
