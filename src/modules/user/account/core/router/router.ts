import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../../middleware/security/security_middleware";
import {
  getAccountController,
  createAccountController,
  deleteAccountController,
  findByIdAccountController,
  listAllAccountController,
  updateAccountController,
} from "../di";

const accountRouter = Router();

accountRouter.use(securityMiddleware);

accountRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAccountController.handler({ request, response }),
);

accountRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAccountController.handler({ request, response }),
);

accountRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAccountController.handler({ request, response }),
);

accountRouter.get(
  "/info",
  (request: Request, response: Response, next: NextFunction) =>
    getAccountController.handler({ request, response }),
);

accountRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAccountController.handler({ request, response }),
);

accountRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAccountController.handler({ request, response }),
);

export { accountRouter };
