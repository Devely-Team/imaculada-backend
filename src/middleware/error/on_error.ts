import { Request, Response } from "express";

import { BaseError } from "../../core/error/base_error";
import { genericError } from "../../core/error/generic_error";
import { handlingError } from "./error_handler";

function onError(
  err: {
    ok: false;
    error: BaseError | undefined;
  },
  request: Request,
  response: Response,
) {
  if (err.error !== undefined) {
    handlingError(err.error, request, response);
  } else {
    handlingError(genericError, request, response);
  }
}

export { onError };
