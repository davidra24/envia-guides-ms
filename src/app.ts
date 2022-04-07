import express, { Router, Request, Response } from 'express';
import { routes } from './frameworks/expressSpecific/routes';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();
const router = Router();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

router.get('/', (request: Request, response: Response) => {
  response.send('Hola mundo');
});

app.use(router);
app.listen(port);

routes(app);
