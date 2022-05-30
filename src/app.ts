import express, { Router, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import morgan from 'morgan';
import routes from './frameworks/expressSpecific/routes';
import { config } from 'dotenv';
import { options as swaggerOptions } from './swagger.options';
import { kafkaGuide } from './frameworks/mq';
import { LogHandler } from './frameworks/common/seq/logHandler.seq';
import { ConnectionDB } from './frameworks';

config();

const app = express();
const router = Router();
const port = process.env.PORT || 5000;
const specs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

ConnectionDB.getInstance();

router.get('/', (request: Request, response: Response) => {
  response.send('Ok');
});

kafkaGuide('grupo-1', 'salidaGuias');

app.use(router);
app.use('/api', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(morgan('combined'));

app.listen(port);
