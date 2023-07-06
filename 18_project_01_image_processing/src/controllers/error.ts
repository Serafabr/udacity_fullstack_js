// Types
import { Request, Response } from "express";

// ******************
// ERROR CONTROLLER - Logic
// ******************

export const errorControler = async (req: Request, res: Response) => {
  res.render("errors");
};
