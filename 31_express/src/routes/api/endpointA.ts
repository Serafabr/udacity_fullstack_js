import express, { Request, Response } from 'express';

// Create router
const routeA = express.Router();

routeA.get('/endpoint_A', (req: Request, res: Response) => {
  res.send('Welcome to endpoint A');
});

export default routeA;