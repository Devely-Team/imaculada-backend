import { DeleteBookletCommand } from "../../domain/command/delete_booklet_command";
import { DeleteByCodeBookletCommand } from "../../domain/command/delete_by_code_booklet_command";
import { FindbyCodeBookletCommand } from "../../domain/command/find_by_code_booklet_command";
import { ListAllBookletCommand } from "../../domain/command/list_all_booklet_command";
import { UpdateBookletCommand } from "../../domain/command/update_booklet_command";
import { singletonDeleteBookletUseCase } from "../../domain/usecase/delete_booklet_usecase";
import { singletonFindByCodeBookletUseCase } from "../../domain/usecase/find_by_code_booklet_usecase";
import { singletonListBookletUseCase } from "../../domain/usecase/list_booklet_usecase";
import { singletonUpdateBookletUseCase } from "../../domain/usecase/update_booklet_usecase";
import { DeleteBookletController } from "../../infra/controller/delete_booklet_controller";
import { DeleteByCodeBookletController } from "../../infra/controller/delete_by_code_booklet_controller";
import { FindByCodeBookletController } from "../../infra/controller/find_by_id_booklet_controller";
import { ListAllBookletController } from "../../infra/controller/list_all_booklet_controller";
import { UpdateBookletController } from "../../infra/controller/update_booklet_controller";

// ? List All Booklet
const listAllBookletCommand = new ListAllBookletCommand(
  singletonListBookletUseCase,
);
const listAllBookletController = new ListAllBookletController(
  listAllBookletCommand,
);

// ? Find By Id Booklet
const findbyIdBookletCommand = new FindbyCodeBookletCommand(
  singletonFindByCodeBookletUseCase,
);
const findByIdBookletController = new FindByCodeBookletController(
  findbyIdBookletCommand,
);

// ? Update Booklet
const updateBookletCommand = new UpdateBookletCommand(
  singletonUpdateBookletUseCase,
);
const updateBookletController = new UpdateBookletController(
  updateBookletCommand,
);

// ? Delete Booklet
const deleteBookletCommand = new DeleteBookletCommand(
  singletonDeleteBookletUseCase,
);
const deleteBookletController = new DeleteBookletController(
  deleteBookletCommand,
);

// ? Delete Booklet
const deleteByCodeBookletCommand = new DeleteByCodeBookletCommand(
  singletonDeleteBookletUseCase,
  singletonFindByCodeBookletUseCase,
);
const deleteByCodeBookletController = new DeleteByCodeBookletController(
  deleteByCodeBookletCommand,
);

// * Export controllers

export {
  listAllBookletController,
  findByIdBookletController,
  updateBookletController,
  deleteBookletController,
  deleteByCodeBookletController,
};
