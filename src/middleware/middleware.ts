import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import express, { Express, Request } from "express";

import { loggerMiddleware } from "./config/logger";
import { logErrorMiddleware } from "./error/error_handler";
import { routes } from "./router/routes";

class Middleware {
  execute(app: Express): void {
    const allowlist = ["https://imaculada-conceicao-app.web.app"];
    const corsOptionsDelegate = (
      req: Request,
      callback: (err: Error | null, options?: CorsOptions) => void,
    ) => {
      let corsOptions;
      const origin = req.header("Origin") as string;
      const accessControl = req.header("access-control-request-headers");
      const isdevelopment = req.header("isdevelopment");
      const isDevelopment =
        (accessControl !== undefined &&
          accessControl.includes("isdevelopment")) ||
        isdevelopment !== undefined;

      if (allowlist.indexOf(origin) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
      } else if (isDevelopment) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
      } else {
        corsOptions = { origin: false }; // disable CORS for this request
      }

      callback(null, corsOptions); // callback expects two parameters: error and options
    };

    app.use(bodyParser.json());
    app.use(cors(corsOptionsDelegate));
    app.use(loggerMiddleware);
    app.use(logErrorMiddleware);

    app.use(express.json());

    app.use("/v1", routes);
  }
}

const MiddlewareSingleton = new Middleware();

export { MiddlewareSingleton };
