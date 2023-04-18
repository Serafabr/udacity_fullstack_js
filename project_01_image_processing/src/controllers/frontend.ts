import fs from "fs";
// Types
import { Request, Response } from "express";
import { imagesDir } from "../utils/directories";
import path from "path";

// ******************
// FRONTEND CONTROLLER - Logic
// ******************

const getMainPage = async (req: Request, res: Response) => {
  fs.readdir(imagesDir, (err, files) => {
    res.render("main", {
      path: "/",
      imagesPath: files,
    });
  });
};

const getImagePage = async (req: Request, res: Response) => {
  const imgPath: string = req.params.imgPath;
  res.render("imageResize", {
    path: "/",
    imgPath: imgPath,
  });
};

const getUploadPage = async (req: Request, res: Response) => {
  res.render("upload", {
    path: "/upload",
  });
};

const postImage = async (req: Request, res: Response) => {
  const file: Express.Multer.File | undefined = req.file;
  if (!file) return res.redirect("/");
  const p = path.join(imagesDir, file.originalname);
  fs.writeFile(p, file.buffer, () => {
    res.redirect("/");
  });
};

export default {
  getMainPage,
  getImagePage,
  getUploadPage,
  postImage,
};
