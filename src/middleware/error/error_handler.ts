import { Request, Response, NextFunction } from "express";

import { BaseError } from "../../core/error/base_error";
import { StatusCodes } from "../../core/utils/http_status_code";

function handlingError(err: BaseError, req: Request, res: Response) {
  const customError = !(
    err.constructor.name === "NodeError" ||
    err.constructor.name === "SyntaxError"
  );

  res.status(err.getStatusCode || StatusCodes.Error).json({
    code: err.getCodeError,
    response: err.name,
    error: {
      type: !customError ? "UnhandledError" : err.constructor.name,
      statusCode: err.getStatusCode || StatusCodes.Error,
      message: err.message,
    },
  });
}

function logError(err: BaseError) {
  console.error(`LogError -> ${err.name} | ${err.message}`);
}

function logErrorMiddleware(
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logError(err);
  handlingError(err, req, res);
  next(err);
}

function isOperationalError(error: BaseError) {
  return error.getIsOperational;
}

export { logError, logErrorMiddleware, handlingError, isOperationalError };
