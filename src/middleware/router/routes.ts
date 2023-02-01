import { Router } from "express";

import { userRoutes } from "../../modules/user/routes/router";

const routes = Router();

routes.use("/user", userRoutes);

export { routes };
