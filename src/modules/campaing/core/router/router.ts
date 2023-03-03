import { NextFunction, Request, Response, Router } from "express";

import { securityMiddleware } from "../../../../middleware/security/security_middleware";
import {
  createCampaignController,
  deleteCampaignController,
  findByIdCampaignController,
  listAllCampaignController,
  updateCampaignController,
} from "../di";

const campaignRouter = Router();

campaignRouter.use(securityMiddleware);

campaignRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createCampaignController.handler({ request, response, next }),
);

campaignRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllCampaignController.handler({ request, response, next }),
);

campaignRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdCampaignController.handler({ request, response, next }),
);

campaignRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateCampaignController.handler({ request, response, next }),
);

campaignRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteCampaignController.handler({ request, response, next }),
);

export { campaignRouter };
