import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../middleware/security/security_middleware";
import { AnalitycsCountedController } from "../infra/controller/analitycs_counted_controller";
import { GetBookletDoesntExistController } from "../infra/controller/find_booklet_dosnst_existe_controller";
import { ListAllBooketUnPaydController } from "../infra/controller/list_all_booklet_unpayd_controller";
import { ListAllPaymentBookletController } from "../infra/controller/list_all_payment_booklet_controller";

const analitycsRouter = Router();

analitycsRouter.use(securityMiddleware);

analitycsRouter.get(
  "/payd_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllPaymentBookletController.handler({ request, response, next }),
);

analitycsRouter.get(
  "/unpayd_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllBooketUnPaydController.handler({ request, response, next }),
);

analitycsRouter.get(
  "/analitycs_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    AnalitycsCountedController.handler({ request, response, next }),
);

analitycsRouter.get(
  "/find_booklet_dosnt_exist",
  (request: Request, response: Response, next: NextFunction) =>
    GetBookletDoesntExistController.handler({ request, response, next }),
);

export { analitycsRouter };
