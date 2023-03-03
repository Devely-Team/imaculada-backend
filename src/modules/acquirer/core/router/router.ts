import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import {
  createAcquirerController,
  deleteAcquirerController,
  findByIdAcquirerController,
  listAllAcquirerController,
  updateAcquirerController,
} from "../di";

const acquirerRouter = Router();

acquirerRouter.use(securityMiddleware);

acquirerRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAcquirerController.handler({ request, response }),
);

acquirerRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAcquirerController.handler({ request, response }),
);

acquirerRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAcquirerController.handler({ request, response }),
);

acquirerRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAcquirerController.handler({ request, response }),
);

acquirerRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAcquirerController.handler({ request, response }),
);

export { acquirerRouter };
