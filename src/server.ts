import dotenv from "dotenv";
import express from "express";

import { Middleware } from "./middleware/middleware";
import { Runner } from "./server/runner";

dotenv.config();
const app = express();

Middleware.execute(app);
Runner.execute(app);
