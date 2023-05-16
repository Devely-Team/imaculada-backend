import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../middleware/security/security_middleware";
import { AddBookletToAcquirerController } from "../infra/controller/add_booklet_to_acquirer_controller";
import { CreateAcquirerController } from "../infra/controller/create_acquirer_controller";
import { DeleteAcquirerController } from "../infra/controller/delete_acquirer_controller";
import { FindByIdAcquirerController } from "../infra/controller/find_by_id_acquirer_controller";
import { ListAllAcquirerController } from "../infra/controller/list_all_acquirer_controller";
import { RemoveBookletToAcquirerController } from "../infra/controller/remove_booklet_to_acquirer_controller";
import { UpdateAcquirerController } from "../infra/controller/update_acquirer_controller";

const acquirerRouter = Router();

acquirerRouter.use(securityMiddleware);

acquirerRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    CreateAcquirerController.getInstance().handler({ request, response, next }),
);

acquirerRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllAcquirerController.getInstance().handler({
      request,
      response,
      next,
    }),
);

acquirerRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    FindByIdAcquirerController.getInstance().handler({
      request,
      response,
      next,
    }),
);

acquirerRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateAcquirerController.getInstance().handler({ request, response, next }),
);

acquirerRouter.put(
  "/add_new_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    AddBookletToAcquirerController.getInstance().handler({
      request,
      response,
      next,
    }),
);

acquirerRouter.delete(
  "/remove_new_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    RemoveBookletToAcquirerController.getInstance().handler({
      request,
      response,
      next,
    }),
);

acquirerRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteAcquirerController.getInstance().handler({ request, response, next }),
);

export { acquirerRouter };
