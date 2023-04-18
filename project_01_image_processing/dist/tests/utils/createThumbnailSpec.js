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
const path_1 = __importDefault(require("path"));
const utils_1 = require("../../utils");
const directories_1 = require("../../utils/directories");
describe("createThumbnail returns true for resizing the image successfully", () => {
    it("createThumbnail(thumbPath, imagePath, 100, 200) must return true", () => __awaiter(void 0, void 0, void 0, function* () {
        const pThumb = path_1.default.join(directories_1.thumbDir, "fjord-200-200.jpg");
        const pImg = path_1.default.join(directories_1.imagesDir, "fjord.jpg");
        const res = yield (0, utils_1.createThumbnail)(pThumb, pImg, 200, 200);
        expect(res).toEqual(true);
    }));
});
