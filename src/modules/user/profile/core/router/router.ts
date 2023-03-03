import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../../middleware/security/security_middleware";
import {
  createProfileController,
  deleteProfileController,
  findByIdProfileController,
  listAllProfileController,
  updateProfileController,
} from "../di";

const profileRouter = Router();

profileRouter.use(securityMiddleware);

profileRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createProfileController.handler({ request, response }),
);

profileRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllProfileController.handler({ request, response }),
);

profileRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdProfileController.handler({ request, response }),
);

profileRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateProfileController.handler({ request, response }),
);

profileRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteProfileController.handler({ request, response }),
);

export { profileRouter };
