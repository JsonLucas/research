import { Router } from 'express';
import mainRouteController from '../../controllers/mainRouteController.js';

const mainRoute = Router();

mainRoute.get('/', mainRouteController);
export default mainRoute;