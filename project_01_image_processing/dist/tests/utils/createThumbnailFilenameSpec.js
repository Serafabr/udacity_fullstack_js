"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
describe("createThumbnailFilename create filename for image file", () => {
    it("createThumbnailFilename(abc, png, 100, 200)", () => {
        expect((0, utils_1.createThumbnailFilename)("abc", ".png", 100, 200)).toEqual("abc-100-200.png");
    });
    it("createThumbnailFilename(abc, png, undefined, 200) must returns abc-auto-200.png", () => {
        expect((0, utils_1.createThumbnailFilename)("abc", ".png", undefined, 200)).toEqual("abc-auto-200.png");
    });
    it("createThumbnailFilename(abc, png, 200, undefined) must returns abc-200-auto.png", () => {
        expect((0, utils_1.createThumbnailFilename)("abc", ".png", 200, undefined)).toEqual("abc-200-auto.png");
    });
    it("createThumbnailFilename(abc, png, undefined, undefined) must returns abc-auto-auto.png", () => {
        expect((0, utils_1.createThumbnailFilename)("abc", ".png", undefined, undefined)).toEqual("abc-auto-auto.png");
    });
    it("createThumbnailFilename(abc, png, undefined, undefined) must returns abc-123-456.png", () => {
        expect((0, utils_1.createThumbnailFilename)("abc", ".png", "123", "456")).toEqual("abc-123-456.png");
    });
});
