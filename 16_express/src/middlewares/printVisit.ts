import { NextFunction, Request, Response } from "express";

const printVisit = (req: Request, res: Response, next: NextFunction) => {
  console.log(`User (IP ${req.ip}) visited ${req.url}`);
  next();
}

export default printVisit;