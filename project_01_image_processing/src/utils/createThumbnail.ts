import sharp from "sharp";

export const createThumbnail = (
  thumbPath: string,
  imagePath: string,
  width?: number,
  height?: number
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      sharp(imagePath)
        .resize(width, height)
        .toFile(thumbPath)
        .then(() => resolve(true));
    } catch (error) {
      reject(error);
    }
  });
};
