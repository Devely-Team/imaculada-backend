import { Router } from "express";

import { accountRouter } from "../../modules/user/account/core/router/router";
import { roleRouter } from "../../modules/user/role/core/router/router";

const routes = Router();

routes.use("/role", roleRouter);
routes.use("/account", accountRouter);

export { routes };
