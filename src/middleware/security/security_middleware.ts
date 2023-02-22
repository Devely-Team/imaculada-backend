import { NextFunction, Request, Response } from "express";

import { BadRequestError } from "../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../core/error/base_error";
import { verifyToken } from "../../modules/user/auth/infra/services/auth_verify_token";

const securityMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const token = request.headers.authorization as string;
    const tokenSplit = token.split(" ")[1];
    return verifyToken({
      token: tokenSplit,
      request,
      response,
      next,
    });
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    return new BadRequestError(
      BaseErrorCodes.objectValidation,
      "Erro durante a quebra do user token",
      message,
    );
  }
};

export { securityMiddleware };
