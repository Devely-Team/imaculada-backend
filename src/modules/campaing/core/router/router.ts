import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import { CreateCampaignController } from "../../infra/controller/create_campaign_controller";
import { DeleteCampaignController } from "../../infra/controller/delete_campaign_controller";
import { FindByIdCampaignController } from "../../infra/controller/find_by_id_campaign_controller";
import { ListAllCampaignController } from "../../infra/controller/list_all_account_controller";
import { UpdateCampaignController } from "../../infra/controller/update_account_controller";

const campaignRouter = Router();

campaignRouter.use(securityMiddleware);

campaignRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    CreateCampaignController.get().handler({ request, response, next }),
);

campaignRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    ListAllCampaignController.get().handler({ request, response, next }),
);

campaignRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    FindByIdCampaignController.get().handler({ request, response, next }),
);

campaignRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    UpdateCampaignController.get().handler({ request, response, next }),
);

campaignRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    DeleteCampaignController.get().handler({ request, response, next }),
);

export { campaignRouter };
