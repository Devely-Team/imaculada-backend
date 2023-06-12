import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import { CreateProfileController } from "../infra/controller/create_profile_controller";
import { DeleteProfileController } from "../infra/controller/delete_profile_controller";
import { FindByIdProfileController } from "../infra/controller/find_by_id_profile_controller";
import { ListAllProfileController } from "../infra/controller/list_all_profile_controller";
import { UpdateProfileController } from "../infra/controller/update_profile_controller";

const profileRouter = Router();

profileRouter.use(securityMiddleware);

profileRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    CreateProfileController.handler({ request, response, next }),
);

profileRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllProfileController.handler({ request, response, next }),
);

profileRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    FindByIdProfileController.handler({ request, response, next }),
);

profileRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateProfileController.handler({ request, response, next }),
);

profileRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteProfileController.handler({ request, response, next }),
);

export { profileRouter };
