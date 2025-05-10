import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import publicarionsRoutes from "../src/publications/publication.routes.js";
import commentsRoutes from "../src/comments/comment.routes.js";
import { dbConnection } from "./mongo.js";
import apiLimiter from "../src/middlewares/request-validator.js";
import { swaggerDocs, swaggerUi } from "./swagger.js"

const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })); 
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", `http://localhost:${process.env.PORT}`],
                connectSrc: ["'self'", `http://localhost:${process.env.PORT}`],
                imgSrc: ["'self'", "data:"],
                styleSrc: ["'self'", "'unsafe-inline'"],
            },
        },
    }));
    app.use(morgan("dev"))
    app.use(apiLimiter)

}

const routes = (app) => {
    app.use("/blog-programador/v1/publications", publicarionsRoutes)
    app.use("/blog-programador/v1/comments", commentsRoutes)
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

}

const dbConnect = async () => {
    try {
        await dbConnection()
    } catch (err) {
        console.log(`Error al conectar la base de datos ${err}`)
        process.exit(1)
    }
}

export const initServer = () => {
    const app = express()
    try {
        middlewares(app)
        dbConnect()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    } catch (err) {
        console.log(`Error al iniciar el Servidor ${err}`)
    }
}