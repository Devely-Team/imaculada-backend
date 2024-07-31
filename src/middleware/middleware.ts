// import * as Sentry from "@sentry/node";
// import * as Tracing from "@sentry/tracing";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import express, { Express, Request } from "express";

// import { StatusCodes } from "../core/utils/http_status_code";
import { loggerMiddleware } from "./config/logger";
import { logErrorMiddleware } from "./error/error_handler";
import { routes as v1 } from "./router/v1/routes";
import { routes as v2 } from "./router/v2/routes";

class Middleware {
  execute(app: Express): void {
    // const sentryDSN = process.env.SENTRY_CONNECTION;

    // Sentry.init({
    //   dsn: sentryDSN,
    //   integrations: [
    //     // enable HTTP calls tracing
    //     new Sentry.Integrations.Http({ tracing: true }),
    //     // enable Express.js middleware tracing
    //     new Tracing.Integrations.Express({ app }),
    //   ],

    //   // We recommend adjusting this value in production, or using tracesSampler
    //   // for finer control
    //   tracesSampleRate: 1.0,
    // });

    // // RequestHandler creates a separate execution context using domains, so that every
    // // transaction/span/breadcrumb is attached to its own Hub instance
    // app.use(Sentry.Handlers.requestHandler());
    // // TracingHandler creates a trace for every incoming request
    // app.use(Sentry.Handlers.tracingHandler());

    // // the rest of your app
    // app.use(
    //   Sentry.Handlers.errorHandler({
    //     shouldHandleError(error) {
    //       switch (error.status) {
    //         case StatusCodes.BadRequest:
    //         case StatusCodes.Unauthorized:
    //         case StatusCodes.Forbidden:
    //         case StatusCodes.NotFound:
    //         case StatusCodes.Conflit:
    //         case StatusCodes.Error:
    //         case StatusCodes.Not_Implemented:
    //           return true;
    //         default:
    //           return false;
    //       }
    //     },
    //   }),
    // );

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

    app.use("/v1", v1);
    app.use("/v2", v2);
  }
}

const MiddlewareSingleton = new Middleware();

export { MiddlewareSingleton };
