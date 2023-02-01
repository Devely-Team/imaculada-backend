import { NextFunction, Request, Response, Router } from "express";

import {
  createAccountController,
  deleteAccountController,
  findByIdAccountController,
  listAllAccountController,
  updateAccountController,
} from "../di";

// TODO: So pode acessar esses endpoints quem tiver o token ativo da aplicação

const accountRouter = Router();

accountRouter.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    createAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    listAllAccountController.handler({ request, response, next }),
);

accountRouter.get(
  "/id",
  (request: Request, response: Response, next: NextFunction) =>
    findByIdAccountController.handler({ request, response, next }),
);

accountRouter.put(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    updateAccountController.handler({ request, response, next }),
);

accountRouter.delete(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    deleteAccountController.handler({ request, response, next }),
);

export { accountRouter };
