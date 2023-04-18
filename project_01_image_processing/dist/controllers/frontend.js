"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const directories_1 = require("../utils/directories");
const path_1 = __importDefault(require("path"));
// ******************
// FRONTEND CONTROLLER - Logic 
// ******************
const getMainPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    fs_1.default.readdir(directories_1.imagesDir, (err, files) => {
        res.render('main', {
            path: '/',
            imagesPath: files,
        });
    });
});
const getImagePage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const imgPath = req.params.imgPath;
    res.render('imageResize', {
        path: '/',
        imgPath: imgPath,
    });
});
const getUploadPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('upload', {
        path: '/upload',
    });
});
const postImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (!file)
        return res.redirect('/');
    const p = path_1.default.join(directories_1.imagesDir, file.originalname);
    fs_1.default.writeFile(p, file.buffer, (err) => {
        res.redirect('/');
    });
});
exports.default = {
    getMainPage,
    getImagePage,
    getUploadPage,
    postImage
};
