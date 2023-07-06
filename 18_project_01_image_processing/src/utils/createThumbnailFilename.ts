export const createThumbnailFilename = (
  filename: string,
  fileExt: string,
  width: number | string = "auto",
  height: number | string = "auto"
): string => {
  return `${filename.split(".")[0]}` + `-${width}-${height}${fileExt}`;
};
