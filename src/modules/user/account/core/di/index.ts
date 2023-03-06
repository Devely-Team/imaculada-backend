import { CreateAccountCommand } from "../../domain/command/create_account_command";
import { DeleteAccountCommand } from "../../domain/command/delete_account_command";
import { FindbyIdAccountCommand } from "../../domain/command/find_by_id_account_command";
import { ListAllAccountCommand } from "../../domain/command/list_all_account_command";
import { UpdateAccountPasswordCommand } from "../../domain/command/update_account_password_command";
import { UpdateAccountProfileCommand } from "../../domain/command/update_account_profile_command";
import { singletonCreateAccountUseCase } from "../../domain/usecase/create_account_usecase";
import { singletonDeleteAccountUseCase } from "../../domain/usecase/delete_account_usecase";
import { singletonFindByIdAccountUseCase } from "../../domain/usecase/find_by_id_account_usecase";
import { singletonListAccountUseCase } from "../../domain/usecase/list_account_usecase";
import { singletonUpdateAccountPasswordUseCase } from "../../domain/usecase/update_account_password_usecase";
import { singletonUpdateAccountProfileUseCase } from "../../domain/usecase/update_account_profile_usecase";
import { CreateAccountController } from "../../infra/controller/create_account_controller";
import { DeleteAccountController } from "../../infra/controller/delete_account_controller";
import { FindByIdAccountController } from "../../infra/controller/find_by_id_account_controller";
import { GetAccountController } from "../../infra/controller/get_account_controller";
import { ListAllAccountController } from "../../infra/controller/list_all_account_controller";
import { UpdateAccountPasswordController } from "../../infra/controller/update_account_password_controller";
import { UpdateAccountProfileController } from "../../infra/controller/update_account_profile_controller";

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

const getAccountController = new GetAccountController(findbyIdAccountCommand);

// ? Update Profile Account
const updateAccountProfileCommand = new UpdateAccountProfileCommand(
  singletonUpdateAccountProfileUseCase,
);
const updateAccountProfileController = new UpdateAccountProfileController(
  updateAccountProfileCommand,
);

// ? Update Account
const updateAccountPasswordCommand = new UpdateAccountPasswordCommand(
  singletonUpdateAccountPasswordUseCase,
);
const updateAccountPasswordController = new UpdateAccountPasswordController(
  updateAccountPasswordCommand,
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
  getAccountController,
  createAccountController,
  listAllAccountController,
  findByIdAccountController,
  updateAccountProfileController,
  updateAccountPasswordController,
  deleteAccountController,
};
