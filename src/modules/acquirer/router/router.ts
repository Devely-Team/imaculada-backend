import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../middleware/security/security_middleware";
import { addBookletToAcquirerController } from "../infra/controller/add_booklet_to_acquirer_controller";
import { createAcquirerController } from "../infra/controller/create_acquirer_controller";
import { deleteAcquirerController } from "../infra/controller/delete_acquirer_controller";
import { findByIdAcquirerController } from "../infra/controller/find_by_id_acquirer_controller";
import { listAllAcquirerController } from "../infra/controller/list_all_acquirer_controller";
import { listAllAcquirerWithPaginationController } from "../infra/controller/list_all_acquirer_with_pagination_controller";
import { removeBookletToAcquirerController } from "../infra/controller/remove_booklet_to_acquirer_controller";
import { updateAcquirerController } from "../infra/controller/update_acquirer_controller";

const acquirerRouter = Router();

acquirerRouter.use(securityMiddleware);

acquirerRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAcquirerController({ request, response, next }),
);

acquirerRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAcquirerController({
      request,
      response,
      next,
    }),
);

acquirerRouter.get(
  "/paginated",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAcquirerWithPaginationController({
      request,
      response,
      next,
    }),
);

acquirerRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAcquirerController({
      request,
      response,
      next,
    }),
);

acquirerRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAcquirerController({ request, response, next }),
);

acquirerRouter.put(
  "/add_new_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    addBookletToAcquirerController({
      request,
      response,
      next,
    }),
);

acquirerRouter.delete(
  "/remove_new_booklet",
  (request: Request, response: Response, next: NextFunction) =>
    removeBookletToAcquirerController({
      request,
      response,
      next,
    }),
);

acquirerRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAcquirerController({ request, response, next }),
);

export { acquirerRouter };
