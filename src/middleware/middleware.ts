import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";

import { loggerMiddleware } from "./config/logger";
import { logErrorMiddleware } from "./error/error_handler";
import { routes } from "./router/routes";

class Middleware {
  execute(app: Express): void {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(loggerMiddleware);
    app.use(logErrorMiddleware);

    app.use(express.json());

    app.use("/v1", routes);
  }
}

const MiddlewareSingleton = new Middleware();

export { MiddlewareSingleton };
