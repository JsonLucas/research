import express, { json } from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
app.use(json());
app.use(cors());
app.use(router);

app.listen(5000, 'localhost', () => { console.log('running at port 5000'); });