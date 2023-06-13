import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../middleware/security/security_middleware";
import { createCampaignController } from "../infra/controller/create_campaign_controller";
import { deleteCampaignController } from "../infra/controller/delete_campaign_controller";
import { findByIdCampaignController } from "../infra/controller/find_by_id_campaign_controller";
import { listAllCampaignController } from "../infra/controller/list_all_account_controller";
import { updateCampaignController } from "../infra/controller/update_account_controller";

const campaignRouter = Router();

campaignRouter.use(securityMiddleware);

campaignRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createCampaignController({ request, response, next }),
);

campaignRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllCampaignController({ request, response, next }),
);

campaignRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdCampaignController({ request, response, next }),
);

campaignRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateCampaignController({ request, response, next }),
);

campaignRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteCampaignController({ request, response, next }),
);

export { campaignRouter };
