import express, { Request, Response } from 'express';
import routes from './routes';

// App
const app = express();
const port = 3002;

// Routes
app.use(routes);
app.use('/', (req: Request, res: Response) => {
  res.send('Welcome to the CSV to JSON!');
})

// Run server
app.listen(port, () => console.log(`Listening to port ${port}`));
