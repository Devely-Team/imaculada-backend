import { StatusCodes } from "../utils/http_status_code";
import { BaseError } from "./base_error";

class NotFoundError extends BaseError {
  constructor(
    name: string,
    description: string,
    statusCode = StatusCodes.NotFound,
    isOperational = true,
  ) {
    super(999, name, statusCode, isOperational, description);
  }
}

export { NotFoundError };
