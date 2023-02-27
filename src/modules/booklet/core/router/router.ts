import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import {
  deleteBookletController,
  deleteByCodeBookletController,
  findByIdBookletController,
  listAllBookletController,
  updateBookletController,
} from "../di";

const bookletRouter = Router();

bookletRouter.use(securityMiddleware);

bookletRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdBookletController.handler({ request, response, next }),
);

bookletRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateBookletController.handler({ request, response, next }),
);

bookletRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteBookletController.handler({ request, response, next }),
);
bookletRouter.delete(
  "/by_code",
  (request: Request, response: Response, next: NextFunction) =>
    deleteByCodeBookletController.handler({ request, response, next }),
);

export { bookletRouter };
