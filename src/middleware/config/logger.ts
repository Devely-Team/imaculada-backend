import expressWinston from "express-winston";
import winston from "winston";

const loggerMiddleware = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    winston.format.colorize(),
    winston.format.json(),
    winston.format.printf(
      info => `[${info.timestamp}] ${info.level}: ${info.message}`,
    ),
  ),
  metaField: "Owoc Backend",
  meta: true, // optional: control whether you want to log the metadata about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute() {
    return false;
  }, // optional: allows to skip some log messages based on request and/or response
});

export { loggerMiddleware };
