import { NextFunction, Request, Response, Router } from "express";

import { authController } from "../infra/controller/auth_controller";

const authRouter = Router();

authRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) => {
    return authController({ request, response });
  },
);

export { authRouter };
