import express from 'express';
import { router } from './routes.js';

const app = express();

app.use(bodyParser.json());
app.use(router);

export {app};