import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../../middleware/security/security_middleware";
import {
  getAccountController,
  createAccountController,
  deleteAccountController,
  findByIdAccountController,
  listAllAccountController,
  updateAccountProfileController,
  updateAccountPasswordController,
} from "../di";

const accountRouter = Router();

accountRouter.use(securityMiddleware);

accountRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/info",
  (request: Request, response: Response, next: NextFunction) =>
    getAccountController.handler({ request, response, next }),
);

accountRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAccountProfileController.handler({ request, response, next }),
);

accountRouter.put(
  "/password",
  (request: Request, response: Response, next: NextFunction) =>
    updateAccountPasswordController.handler({ request, response, next }),
);

accountRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAccountController.handler({ request, response, next }),
);

export { accountRouter };
