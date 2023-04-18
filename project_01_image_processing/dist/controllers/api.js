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
exports.apiImageController = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Private modules
const utils_1 = require("../utils");
const directories_1 = require("../utils/directories");
// ******************
// API CONTROLLER - Logic 
// ******************
const apiImageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get query params from URL
    const filenameInput = req.query.filename || req.body.filename;
    const widthInput = req.query.width || req.body.width;
    const heightInput = req.query.height || req.body.height;
    // Check for filenameInput errors
    if (!filenameInput)
        return res.redirect("/error");
    // Get width and height from URL
    // These values must be valid numbers (integers)
    const [width, height] = (0, utils_1.checkDimensionsInput)(widthInput, heightInput);
    // If there's no width nor height, return error
    if (!width && !height)
        return res.redirect("/error");
    try {
        // Get file extension
        const filename = yield (0, utils_1.getFileWithExt)(directories_1.imagesDir, filenameInput);
        // Get just file extension
        const fileExt = path_1.default.extname(filename);
        const imagePath = path_1.default.join(directories_1.imagesDir, filename);
        // Filename for thumbnail => filename=fjord.jpg&width=200&height=200 => fjdor-200-200.jpg
        const thumbFilename = (0, utils_1.createThumbnailFilename)(filename, fileExt, width, height);
        // Check if thumbFilename exists
        const thumbnailPath = path_1.default.join(directories_1.thumbDir, thumbFilename);
        const thumbExists = fs_1.default.existsSync(thumbnailPath);
        // If thumbFilename exists, return it
        if (thumbExists) {
            res.status(200).render('apiView.ejs', {
                thumbFilename
            });
            fs_1.default.appendFile(path_1.default.join(directories_1.logDir, "api_images.txt"), `Sending file: ${thumbFilename}... To: ${req.ip}\n`, (err) => {
                if (err)
                    console.log(err);
            });
        }
        // Else, create thumbnail and return it
        else {
            const thumbCreateSucceded = yield (0, utils_1.createThumbnail)(thumbnailPath, imagePath, width, height);
            if (thumbCreateSucceded)
                res.status(200).render('apiView.ejs', {
                    thumbFilename
                });
            fs_1.default.appendFile(path_1.default.join(directories_1.logDir, "api_images.txt"), `Creating new thumbnail: ${thumbFilename}... Sending to: ${req.ip}\n`, (err) => {
                if (err)
                    console.log(err);
            });
        }
    }
    catch (error) {
        res.redirect("/error");
    }
});
exports.apiImageController = apiImageController;
