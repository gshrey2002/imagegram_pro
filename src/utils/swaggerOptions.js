import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'ImageGram API',
        version: '1.0.0',
        description:"Crud api documentation from swagger",
      },
      server:[{
        url:   "http://localhost:3000/api/v1post",
      }
    ],
    },
    apis: ['/Users/pw/ImageGram_Pro/src/Router/post.js'], // files containing annotations as above
  };
