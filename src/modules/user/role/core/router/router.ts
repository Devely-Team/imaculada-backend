import { NextFunction, Request, Response, Router } from "express";

import {
  createRoleController,
  deleteRoleController,
  findByIdRoleController,
  listAllRoleController,
  updateRoleController,
} from "../di";

const roleRouter = Router();

roleRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createRoleController.handler({ request, response, next }),
);

roleRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllRoleController.handler({ request, response, next }),
);

roleRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdRoleController.handler({ request, response, next }),
);

roleRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateRoleController.handler({ request, response, next }),
);

roleRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteRoleController.handler({ request, response, next }),
);

export { roleRouter };
