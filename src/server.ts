import dotenv from "dotenv";
import express from "express";

import { MiddlewareSingleton } from "./middleware/middleware";
import { RunnerSingleton } from "./server/runner";

dotenv.config();
const app = express();

MiddlewareSingleton.execute(app);
RunnerSingleton.execute(app);
