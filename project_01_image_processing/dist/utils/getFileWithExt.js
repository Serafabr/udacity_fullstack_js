"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileWithExt = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getFileWithExt = (pathDir, filename) => {
    return new Promise((resolve, reject) => {
        const pathExists = fs_1.default.existsSync(path_1.default.join(pathDir, filename));
        if (pathExists)
            resolve(filename);
        else {
            // Check for filenames without extension
            fs_1.default.readdir(pathDir, (err, files) => {
                // Check for filename on images
                const filenameList = files.map((file) => file.split(".")[0]);
                const fileIndex = filenameList.indexOf(filename);
                // Check for file not found
                if (fileIndex < 0)
                    reject(new Error("File not found"));
                else
                    resolve(files[fileIndex]);
            });
        }
    });
};
exports.getFileWithExt = getFileWithExt;
