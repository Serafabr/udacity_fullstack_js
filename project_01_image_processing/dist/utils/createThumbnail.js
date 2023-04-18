"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbnail = void 0;
const sharp_1 = __importDefault(require("sharp"));
const createThumbnail = (thumbPath, imagePath, width, height) => {
    return new Promise((resolve, reject) => {
        try {
            (0, sharp_1.default)(imagePath)
                .resize(width, height)
                .toFile(thumbPath)
                .then(data => resolve(true));
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.createThumbnail = createThumbnail;
