import { Router } from "express";

import { acquirerRouter } from "../../../modules/acquirer/router/router";
import { analitycsRouter } from "../../../modules/analytics/router/router";
import { bookletRouter } from "../../../modules/booklet/router/router";
import { campaignRouter } from "../../../modules/campaing/router/router";
import { userRoutes } from "../../../modules/user/routes/router";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/campaign", campaignRouter);
routes.use("/acquirer", acquirerRouter);
routes.use("/booklet", bookletRouter);
routes.use("/analytics", analitycsRouter);

export { routes };
