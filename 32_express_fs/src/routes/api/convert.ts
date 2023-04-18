import express, { Request, Response } from 'express';
import path from 'path';
import convertCsvToJson from '../../utilites/csvToJson';

// Create router
const convert = express.Router();

// Routes
convert.get('/convert', (req: Request, res: Response) => {
  console.log('Converting file...');
  convertCsvToJson(
    path.join(path.dirname(require.main?.filename || ''), '..', 'data', 'users.csv'),
    path.join(path.dirname(require.main?.filename || ''), '..', 'data', 'users.json')
  );
  console.log('Loading UI...');
  res.send('Converting...');
});

export default convert;