import express from 'express';
import convert from './api/convert';

// Create routes
const routes = express.Router();

// Routes
routes.use(convert);

export default routes;