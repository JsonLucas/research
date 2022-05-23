import { Router } from 'express';
import initialPageController from '../../controllers/initialPageController.js';
import mainRouteController from '../../controllers/mainRouteController.js';

const mainRoute = Router();

mainRoute.post('/', mainRouteController);
mainRoute.get('/initial', initialPageController);
export default mainRoute;