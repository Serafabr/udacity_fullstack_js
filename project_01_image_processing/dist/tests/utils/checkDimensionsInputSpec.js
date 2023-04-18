"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
describe("checkDimensionInput returns dimensions based on user input (string)", () => {
    it("checkDimensionInput(a, b) must be [undefined, undefined]", () => {
        expect((0, utils_1.checkDimensionsInput)('auto', 'auto')).toEqual([undefined, undefined]);
    });
    it("checkDimensionInput('1', b) must be [1, undefined]", () => {
        expect((0, utils_1.checkDimensionsInput)('1', 'auto')).toEqual([1, undefined]);
    });
    it("checkDimensionInput(a, '1') must be [undefined, 1]", () => {
        expect((0, utils_1.checkDimensionsInput)('auto', '1')).toEqual([undefined, 1]);
    });
    it("checkDimensionInput('1', '2') must be [1, 2]", () => {
        expect((0, utils_1.checkDimensionsInput)('1', '2')).toEqual([1, 2]);
    });
});
