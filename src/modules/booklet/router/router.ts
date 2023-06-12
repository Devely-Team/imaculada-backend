import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../middleware/security/security_middleware";
import { AddPaymentToAllBookletController } from "../infra/controller/add_payment_to_all_booklet_controller";
import { CreateSingleBookletController } from "../infra/controller/create_single_booklet_controller";
import { DeleteByCodeBookletPaymentController } from "../infra/controller/delete_booklet_payment_controller";
import { DeleteByCodeBookletController } from "../infra/controller/delete_by_code_booklet_controller";
import { FindByCodeBookletController } from "../infra/controller/find_by_code_booklet_controller";
import { ListAllBookletController } from "../infra/controller/list_all_booklet_controller";
import { ListByParcelPaidBookletController } from "../infra/controller/list_by_parcel_paid_booklet_controller";
import { StatusPaymentBookletController } from "../infra/controller/status_payment_booklet_controller";
import { UpdateBookletController } from "../infra/controller/update_booklet_controller";
import { FindByAcquirerBookletController } from "../infra/controller/find_by_acquirer_id_booklet_controller";

const bookletRouter = Router();

bookletRouter.use(securityMiddleware);

bookletRouter.post(
  "/add_payment_to_all",
  (request: Request, response: Response, next: NextFunction) =>
    AddPaymentToAllBookletController.handler({ request, response, next }),
);

bookletRouter.post(
  "/create_single_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    CreateSingleBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/by_parcel_paid",
  (request: Request, response: Response, next: NextFunction) =>
    ListByParcelPaidBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/status_payment",
  (request: Request, response: Response, next: NextFunction) =>
    StatusPaymentBookletController.handler({ request, response, next }),
);

bookletRouter.get(
  "/code",
  (request: Request, response: Response, next: NextFunction) =>
    FindByCodeBookletController.handler({ request, response, next }),
);
bookletRouter.get(
  "/acquirer_id",
  (request: Request, response: Response, next: NextFunction) =>
    FindByAcquirerBookletController.handler({ request, response, next }),
);

bookletRouter.put(
  "/is_paid",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateBookletController.handler({ request, response, next }),
);

bookletRouter.delete(
  "/by_code",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteByCodeBookletController.handler({ request, response, next }),
);

bookletRouter.delete(
  "/booklet_payment/by_id",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteByCodeBookletPaymentController.handler({ request, response, next }),
);

export { bookletRouter };
