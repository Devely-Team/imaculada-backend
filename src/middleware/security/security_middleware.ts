import { NextFunction, Request, Response } from "express";

import { verifyToken } from "../../modules/user/auth/infra/services/auth_verify_token";

const securityMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = request.headers.authorization as string;
  const tokenSplit = token.split(" ")[1];
  return verifyToken({
    token: tokenSplit,
    request,
    response,
    next,
  });
};

export { securityMiddleware };
