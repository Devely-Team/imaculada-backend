import { NextFunction, Request, Response } from "express";

// import { authVerifySponsorJWT } from "../../features/sponsor/auth/core/container/di";

const securityMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = request.headers.authorization as string;
  const tokenSplit = token.split(" ")[1];
  //   return authVerifySponsorJWT.service({
  //     token: tokenSplit,
  //     request,
  //     response,
  //     next,
  //   });
};

export { securityMiddleware };
