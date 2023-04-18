import fs from "fs";
import path from "path";

export const getFileWithExt = (
  pathDir: string,
  filename: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pathExists = fs.existsSync(path.join(pathDir, filename));
    if (pathExists) resolve(filename);
    else {
      // Check for filenames without extension
      fs.readdir(pathDir, (err, files) => {
        // Check for filename on images
        const filenameList = files.map((file) => file.split(".")[0]);
        const fileIndex = filenameList.indexOf(filename);
        // Check for file not found
        if (fileIndex < 0) reject(new Error("File not found"));
        else resolve(files[fileIndex]);
      });
    }
  });
};
