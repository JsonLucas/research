import { Router } from 'express';
import mainRoute from './main/mainRoute.js';

const router = Router();
router.use(mainRoute);
export default router;