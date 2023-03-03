import { StatusCodes } from "../utils/http_status_code";
import { BaseError, BaseErrorCodes } from "./base_error";

class AccessDeniedRequestError extends BaseError {
  constructor(
    description: string,
    name = "Accesso Negado",
    codeError = BaseErrorCodes.accessValidation,
    statusCode = StatusCodes.Unauthorized,
    isOperational = true,
  ) {
    super(codeError, name, statusCode, isOperational, description);
  }
}

export { AccessDeniedRequestError };
