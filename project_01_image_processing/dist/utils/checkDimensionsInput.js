"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDimensionsInput = void 0;
const checkDimensionsInput = (widthInput, heightInput) => {
    let width = undefined;
    let height = undefined;
    if (!isNaN(parseInt(widthInput)))
        width = parseInt(widthInput);
    if (!isNaN(parseInt(heightInput)))
        height = parseInt(heightInput);
    return [width, height];
};
exports.checkDimensionsInput = checkDimensionsInput;
