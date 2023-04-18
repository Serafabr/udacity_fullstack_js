import express, { Request, Response } from 'express';

// Create router
const routeB = express.Router();

routeB.get('/endpoint_B', (req: Request, res: Response) => {
  res.send('Welcome to endpoint B');
});

export default routeB;