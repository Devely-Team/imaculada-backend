import { NextFunction, Request, Response, Router } from "express";

import {
  createProfileController,
  deleteProfileController,
  findByIdProfileController,
  listAllProfileController,
  updateProfileController,
} from "../di";

const profileRouter = Router();

profileRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createProfileController.handler({ request, response, next }),
);

profileRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllProfileController.handler({ request, response, next }),
);

profileRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdProfileController.handler({ request, response, next }),
);

profileRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateProfileController.handler({ request, response, next }),
);

profileRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteProfileController.handler({ request, response, next }),
);

export { profileRouter };
