import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Backend para el blog del programador",
            version: "1.0.0",
            description: "API REST para el blog del programador",
            contact:{
                name: "Fredy Hernández",
                email: "fhernandez-2023176@kinal.edu.gt"
            }    
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/blog-programador/v1"
            }
        ]
    },
    apis: [
        "./src/comments/comment.routes.js",
        "./src/publications/publication.routes.js",
    ],
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
export { swaggerDocs, swaggerUi }