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
        url: 'http://api404.eastus.cloudapp.azure.com:8000/api'
      }
    ]
  },
  apis: ['./src/entities/*.ts', './src/frameworks/expressSpecific/routes/*.ts']
};
