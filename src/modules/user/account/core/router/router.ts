import { NextFunction, Request, Response, Router } from "express";

import { createAccountController } from "../di/di";

const accountRouter = Router();

accountRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAccountController.handler({ request, response, next }),
);

export { accountRouter };
