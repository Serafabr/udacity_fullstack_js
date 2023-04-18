import path from "path";
import fs from "fs";
// Private modules
import {
  checkDimensionsInput,
  createThumbnail,
  createThumbnailFilename,
  getFileWithExt,
} from "../utils";
import { imagesDir, logDir, thumbDir } from "../utils/directories";
// Types
import { Request, Response } from "express";

// ******************
// API CONTROLLER - Logic
// ******************

export const apiImageController = async (req: Request, res: Response) => {
  // Get query params from URL
  const filenameInput: string =
    (req.query.filename as string) || req.body.filename;
  const widthInput: string = (req.query.width as string) || req.body.width;
  const heightInput: string = (req.query.height as string) || req.body.height;

  // Check for filenameInput errors
  if (!filenameInput) return res.redirect("/error");

  // Get width and height from URL
  // These values must be valid numbers (integers)
  const [width, height] = checkDimensionsInput(widthInput, heightInput);

  // If there's no width nor height, return error
  if (!width && !height) return res.redirect("/error");

  try {
    // Get file extension
    const filename: string = await getFileWithExt(imagesDir, filenameInput);

    // Get just file extension
    const fileExt: string = path.extname(filename);
    const imagePath: string = path.join(imagesDir, filename);

    // Filename for thumbnail => filename=fjord.jpg&width=200&height=200 => fjdor-200-200.jpg
    const thumbFilename: string = createThumbnailFilename(
      filename,
      fileExt,
      width,
      height
    );

    // Check if thumbFilename exists
    const thumbnailPath: string = path.join(thumbDir, thumbFilename);
    const thumbExists: boolean = fs.existsSync(thumbnailPath);

    // If thumbFilename exists, return it
    if (thumbExists) {
      res.status(200).render("apiView.ejs", {
        thumbFilename,
      });
      fs.appendFile(
        path.join(logDir, "api_images.txt"),
        `Sending file: ${thumbFilename}... To: ${req.ip}\n`,
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    // Else, create thumbnail and return it
    else {
      const thumbCreateSucceded = await createThumbnail(
        thumbnailPath,
        imagePath,
        width,
        height
      );
      if (thumbCreateSucceded)
        res.status(200).render("apiView.ejs", {
          thumbFilename,
        });
      fs.appendFile(
        path.join(logDir, "api_images.txt"),
        `Creating new thumbnail: ${thumbFilename}... Sending to: ${req.ip}\n`,
        (err) => {
          if (err) console.log(err);
        }
      );
    }
  } catch (error) {
    res.redirect("/error");
  }
};
