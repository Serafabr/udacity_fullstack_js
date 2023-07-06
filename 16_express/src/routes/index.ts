import express from 'express';
import printVisit from '../middlewares/printVisit';
import routeA from './api/endpointA';
import routeB from './api/endpointB';

// Create router
const routes = express.Router();

routes.use(printVisit, routeA);
routes.use(printVisit, routeB);

export default routes;