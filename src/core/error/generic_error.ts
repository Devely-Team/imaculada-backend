import { StatusCodes } from "../utils/http_status_code";
import { BaseError, BaseErrorCodes } from "./base_error";

class GenericError extends BaseError {
  constructor(
    codeError = BaseErrorCodes.genericError,
    statusCode = StatusCodes.Error,
    name = "Generic Error",
    description = "Error generic",
    isOperational = false,
  ) {
    super(codeError, name, statusCode, isOperational, description);
  }
}

const genericError = new GenericError();

export { GenericError, genericError };
