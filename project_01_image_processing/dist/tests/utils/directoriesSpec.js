"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbDir = exports.imagesDir = void 0;
const path_1 = __importDefault(require("path"));
// Images and Thumbnails directory
exports.imagesDir = path_1.default.join(__dirname, "..", "..", "images");
exports.thumbDir = path_1.default.join(__dirname, "..", "..", "images", "thumbnail");
