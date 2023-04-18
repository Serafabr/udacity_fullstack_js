import express, { Request, Response } from 'express';
import routes from './routes';

// Create app 
const app = express();
const port = 3002;

// Routes
app.use(routes);
app.get('/', (req: Request, res: Response) => {
  res.send('Main page!');
});

app.listen(port, () => {console.log(`Listening to port ${port}`)});