import { StatusCodes } from "../utils/http_status_code";
import { BaseError, BaseErrorCodes } from "./base_error";

class DatabaseError extends BaseError {
  constructor(
    name: string,
    description: string,
    statusCode = StatusCodes.BadRequest,
    isOperational = true,
    codeError = BaseErrorCodes.databaseError,
  ) {
    super(codeError, name, statusCode, isOperational, description);
  }
}

export { DatabaseError };
