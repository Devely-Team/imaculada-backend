import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import { CreateSingleBookletController } from "../../infra/controller/create_single_booklet_controller";
import {
  deleteByCodeBookletController,
  findByCodeBookletController,
  findByAcquirerIdBookletController,
  listAllBookletController,
  updateBookletController,
  addPaymentToAllBookletController,
  statusPaymentBookletController,
  deleteByCodeBookletPaymentController,
  listByParcelPaidBookletController,
} from "../di";

const bookletRouter = Router();

bookletRouter.use(securityMiddleware);

bookletRouter.post(
  "/add_payment_to_all",
  (request: Request, response: Response, next: NextFunction) =>
    addPaymentToAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/create_single_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    CreateSingleBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/by_parcel_paid",
  (request: Request, response: Response, next: NextFunction) =>
    listByParcelPaidBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/status_payment",
  (request: Request, response: Response, next: NextFunction) =>
    statusPaymentBookletController.handler({ request, response, next }),
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

bookletRouter.delete(
  "/booklet_payment/by_id",
  (request: Request, response: Response, next: NextFunction) =>
    deleteByCodeBookletPaymentController.handler({ request, response, next }),
);

export { bookletRouter };
