import { Router } from "express";

import { acquirerRouter } from "../../modules/acquirer/core/router/router";
import { campaignRouter } from "../../modules/campaing/core/router/router";
import { userRoutes } from "../../modules/user/routes/router";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/campaign", campaignRouter);
routes.use("/acquirer", acquirerRouter);

export { routes };
