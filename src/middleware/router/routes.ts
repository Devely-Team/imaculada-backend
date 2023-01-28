import { Router } from "express";

import { profileRouter } from "../../modules/user/profile/core/router/router";

const routes = Router();

routes.use("/profile", profileRouter);

export { routes };
