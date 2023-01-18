// ? Create

import { CreateAccountCommand } from "../../domain/command/create_account_command";
import { singletonAccountUseCase } from "../../domain/usecase/create_account_use_case";
import { CreateAccountController } from "../../infra/controller/create_account_controller";

const createAccountCommand = new CreateAccountCommand(singletonAccountUseCase);
const createAccountController = new CreateAccountController(
  createAccountCommand,
);

// * Exportando

export { createAccountController };
