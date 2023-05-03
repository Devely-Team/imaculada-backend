import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import {
  deleteByCodeBookletController,
  findByCodeBookletController,
  findByAcquirerIdBookletController,
  listAllBookletController,
  updateBookletController,
  addPaymentToAllBookletController,
} from "../di";

const bookletRouter = Router();

bookletRouter.use(securityMiddleware);

bookletRouter.post(
  "/add_payment_to_all",
  (request: Request, response: Response, next: NextFunction) =>
    addPaymentToAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/code",
  (request: Request, response: Response, next: NextFunction) =>
    findByCodeBookletController.handler({ request, response, next }),
);
bookletRouter.get(
  "/acquirer_id",
  (request: Request, response: Response, next: NextFunction) =>
    findByAcquirerIdBookletController.handler({ request, response, next }),
);

bookletRouter.put(
  "/is_paid",
  (request: Request, response: Response, next: NextFunction) =>
    updateBookletController.handler({ request, response, next }),
);

bookletRouter.delete(
  "/by_code",
  (request: Request, response: Response, next: NextFunction) =>
    deleteByCodeBookletController.handler({ request, response, next }),
);

export { bookletRouter };
