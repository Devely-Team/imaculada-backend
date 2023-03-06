import { StatusCodes } from "../utils/http_status_code";
import { BaseError, BaseErrorCodes } from "./base_error";

class AccessDeniedRequestError extends BaseError {
  constructor(
    description: string,
    name = "Acesso Negado",
    codeError = BaseErrorCodes.accessValidation,
    statusCode = StatusCodes.Forbidden,
    isOperational = false,
  ) {
    super(codeError, name, statusCode, isOperational, description);
  }
}

export { AccessDeniedRequestError };
