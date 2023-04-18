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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const directories_1 = require("../../utils/directories");
describe("getFileWithExt return filename with extension (search on images folder)", () => {
    it("getFileWithExt(pathDir, fjord) should returns 'fjord.jpg'", () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = yield (0, utils_1.getFileWithExt)(directories_1.imagesDir, "fjord");
        expect(filename).toEqual("fjord.jpg");
    }));
    it("getFileWithExt(pathDir, palmtunnel.jpg) should returns 'palmtunnel.jpg'", () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = yield (0, utils_1.getFileWithExt)(directories_1.imagesDir, "palmtunnel.jpg");
        expect(filename).toEqual("palmtunnel.jpg");
    }));
});
