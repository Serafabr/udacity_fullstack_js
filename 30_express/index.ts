import express, { Request, Response } from 'express';

// Create app
const app = express();
const port = 3002;

// Routes
app.get('/api', (req: Request, res: Response) => {
  res.send(`IP of request: ${req.ip}`);
})

// Listen
app.listen(port, () => console.log(`Server listening to port ${port}`));