import { Router } from "express";

import { accountRouter } from "../account/router/router";
import { authRouter } from "../auth/router/router";
import { profileRouter } from "../profile/router/router";

const userRoutes = Router();

userRoutes.use("/profile", profileRouter);
userRoutes.use("/account", accountRouter);
userRoutes.use("/auth", authRouter);

export { userRoutes };
