import { CreateAccountCommand } from "../../domain/command/create_account_command";
import { DeleteAccountCommand } from "../../domain/command/delete_account_command";
import { FindbyIdAccountCommand } from "../../domain/command/find_by_id_account_command";
import { ListAllAccountCommand } from "../../domain/command/list_all_account_command";
import { UpdateAccountCommand } from "../../domain/command/update_account_command";
import { singletonCreateAccountUseCase } from "../../domain/usecase/create_account_usecase";
import { singletonDeleteAccountUseCase } from "../../domain/usecase/delete_account_usecase";
import { singletonFindByIdAccountUseCase } from "../../domain/usecase/find_by_id_account_usecase";
import { singletonListAccountUseCase } from "../../domain/usecase/list_account_usecase";
import { singletonUpdateAccountUseCase } from "../../domain/usecase/update_account_usecase";
import { CreateAccountController } from "../../infra/controller/create_account_controller";
import { DeleteAccountController } from "../../infra/controller/delete_account_controller";
import { FindByIdAccountController } from "../../infra/controller/find_by_id_account_controller";
import { ListAllAccountController } from "../../infra/controller/list_all_account_controller";
import { UpdateAccountController } from "../../infra/controller/update_account_controller";

// ? Create Account
const createAccountCommand = new CreateAccountCommand(
  singletonCreateAccountUseCase,
);
const createAccountController = new CreateAccountController(
  createAccountCommand,
);

// ? List All Account
const listAllAccountCommand = new ListAllAccountCommand(
  singletonListAccountUseCase,
);
const listAllAccountController = new ListAllAccountController(
  listAllAccountCommand,
);

// ? Find By Id Account
const findbyIdAccountCommand = new FindbyIdAccountCommand(
  singletonFindByIdAccountUseCase,
);
const findByIdAccountController = new FindByIdAccountController(
  findbyIdAccountCommand,
);

// ? Update Account
const updateAccountCommand = new UpdateAccountCommand(
  singletonUpdateAccountUseCase,
);
const updateAccountController = new UpdateAccountController(
  updateAccountCommand,
);

// ? Delete Account
const deleteAccountCommand = new DeleteAccountCommand(
  singletonDeleteAccountUseCase,
);
const deleteAccountController = new DeleteAccountController(
  deleteAccountCommand,
);

// * Export controllers

export {
  createAccountController,
  listAllAccountController,
  findByIdAccountController,
  updateAccountController,
  deleteAccountController,
};
