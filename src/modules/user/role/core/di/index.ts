import { CreateRoleCommand } from "../../domain/command/create_role_command";
import { DeleteRoleCommand } from "../../domain/command/delete_role_command";
import { FindbyIdRoleCommand } from "../../domain/command/find_by_id_role_command";
import { ListAllRoleCommand } from "../../domain/command/list_all_role_command";
import { UpdateRoleCommand } from "../../domain/command/update_role_command";
import { singletonCreateRoleUseCase } from "../../domain/usecase/create_role_usecase";
import { singletonDeleteRoleUseCase } from "../../domain/usecase/delete_role_usecase";
import { singletonFindByIdRoleUseCase } from "../../domain/usecase/find_by_id_role_usecase";
import { singletonListRoleUseCase } from "../../domain/usecase/list_role_usecase";
import { singletonUpdateRoleUseCase } from "../../domain/usecase/update_role_usecase";
import { CreateRoleController } from "../../infra/controller/create_role_controller";
import { DeleteRoleController } from "../../infra/controller/delete_role_controller";
import { FindByIdRoleController } from "../../infra/controller/find_by_id_role_controller";
import { ListAllRoleController } from "../../infra/controller/list_all_role_controller";
import { UpdateRoleController } from "../../infra/controller/update_role_controller";

// ? Create Role
const createRoleCommand = new CreateRoleCommand(singletonCreateRoleUseCase);
const createRoleController = new CreateRoleController(createRoleCommand);

// ? List All Role
const listAllRoleCommand = new ListAllRoleCommand(singletonListRoleUseCase);
const listAllRoleController = new ListAllRoleController(listAllRoleCommand);

// ? Find By Id Role
const findbyIdRoleCommand = new FindbyIdRoleCommand(
  singletonFindByIdRoleUseCase,
);
const findByIdRoleController = new FindByIdRoleController(findbyIdRoleCommand);

// ? Update Role
const updateRoleCommand = new UpdateRoleCommand(singletonUpdateRoleUseCase);
const updateRoleController = new UpdateRoleController(updateRoleCommand);

// ? Delete Role
const deleteRoleCommand = new DeleteRoleCommand(singletonDeleteRoleUseCase);
const deleteRoleController = new DeleteRoleController(deleteRoleCommand);

// * Export controllers

export {
  createRoleController,
  listAllRoleController,
  findByIdRoleController,
  updateRoleController,
  deleteRoleController,
};
