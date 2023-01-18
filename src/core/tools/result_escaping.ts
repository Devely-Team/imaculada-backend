import { Request, Response } from "express";

import { onError } from "../../middleware/error/on_error";
import { StatusCodes } from "../utils/http_status_code";
import { Result } from "./result_type";

function escaping<T>(
  result: Result<T>,
  request: Request,
  response: Response,
  status: StatusCodes,
) {
  if (result.ok) {
    response.status(status).json(result.value);
  } else {
    onError(result, request, response);
  }
}

export { escaping };
