import swaggerJSDoc from 'swagger-jsdoc';
import { config } from 'dotenv';

if (process.env.ENV !== 'production') {
  config();
}

export const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Envia Guides Microservice API',
      version: '0.0.1',
      description: 'Microservicio de guias de envía API'
    },
    servers: [
      {
        url: 'https://envia-guide.herokuapp.com/api'
      }
    ]
  },
  apis: ['./src/entities/*.ts', './src/frameworks/expressSpecific/routes/*.ts']
};
