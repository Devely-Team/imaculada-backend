import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import {
  createAcquirerController,
  deleteAcquirerController,
  findByIdAcquirerController,
  listAllAcquirerController,
  updateAcquirerController,
  addBookletToAcquirerController,
} from "../di";

const acquirerRouter = Router();

acquirerRouter.use(securityMiddleware);

acquirerRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAcquirerController.handler({ request, response, next }),
);

acquirerRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAcquirerController.handler({ request, response, next }),
);

acquirerRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAcquirerController.handler({ request, response, next }),
);

acquirerRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAcquirerController.handler({ request, response, next }),
);

acquirerRouter.put(
  "/add_new_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    addBookletToAcquirerController.handler({ request, response, next }),
);

acquirerRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAcquirerController.handler({ request, response, next }),
);

export { acquirerRouter };
