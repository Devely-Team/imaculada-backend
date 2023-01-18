import { StatusCodes } from "../utils/http_status_code";
import { BaseError, BaseErrorCodes } from "./base_error";

class BadRequestError extends BaseError {
  constructor(
    codeError: BaseErrorCodes,
    name: string,
    description: string,
    statusCode = StatusCodes.BadRequest,
    isOperational = true,
  ) {
    super(codeError, name, statusCode, isOperational, description);
  }
}

export { BadRequestError };
