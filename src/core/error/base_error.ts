import { StatusCodes } from "../utils/http_status_code";

enum BaseErrorCodes {
  emailValidation = 1,
  stringValidation = 2,
  objectValidation = 3,
  booleanValidation = 4,
  dateValidation = 5,
  uuidValidation = 6,
  numberValidation = 7,
  databaseError = 8,
  jsonValidation = 98,
  genericError = 99,
}

class BaseError extends Error {
  private readonly isOperational: boolean;
  private readonly statusCode: StatusCodes;
  private readonly codeError: BaseErrorCodes;

  constructor(
    codeError: BaseErrorCodes,
    name: string,
    statusCode: StatusCodes,
    isOperational: boolean,
    description: string,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.codeError = codeError;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }

  get getIsOperational() {
    return this.isOperational;
  }

  get getStatusCode() {
    return this.statusCode;
  }

  get getCodeError() {
    return this.codeError;
  }
}

export { BaseError, BaseErrorCodes };
