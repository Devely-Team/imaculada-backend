import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import { CreateAccountController } from "../infra/controller/create_account_controller";
import { DeleteAccountController } from "../infra/controller/delete_account_controller";
import { FindByIdAccountController } from "../infra/controller/find_by_id_account_controller";
import { GetAccountController } from "../infra/controller/get_account_controller";
import { ListAllAccountController } from "../infra/controller/list_all_account_controller";
import { UpdateAccountPasswordController } from "../infra/controller/update_account_password_controller";
import { UpdateAccountProfileController } from "../infra/controller/update_account_profile_controller";

const accountRouter = Router();

accountRouter.use(securityMiddleware);

accountRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    CreateAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    FindByIdAccountController.handler({
      request,
      response,
      next,
    }),
);

accountRouter.get(
  "/info",
  (request: Request, response: Response, next: NextFunction) =>
    GetAccountController.handler({ request, response, next }),
);

accountRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateAccountProfileController.handler({
      request,
      response,
      next,
    }),
);

accountRouter.put(
  "/password",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateAccountPasswordController.handler({
      request,
      response,
      next,
    }),
);

accountRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteAccountController.handler({ request, response, next }),
);

export { accountRouter };
