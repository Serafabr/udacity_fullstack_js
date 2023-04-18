"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbnailFilename = void 0;
const createThumbnailFilename = (filename, fileExt, width = 'auto', height = 'auto') => {
    return `${filename.split(".")[0]}` +
        `-${width}-${height}${fileExt}`;
};
exports.createThumbnailFilename = createThumbnailFilename;
