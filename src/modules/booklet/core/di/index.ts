import { singletonCreateBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/create_booklet_payment_usecase";
import { singletonSetNewStatusOfBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/set_new_status_of_booklet_payment_usecase";
import { AddPaymentToBookletCommand } from "../../domain/command/add_payment_to_booklet_command";
import { DeleteByCodeBookletCommand } from "../../domain/command/delete_by_code_booklet_command";
import { FindbyAcquirerBookletCommand } from "../../domain/command/find_by_acquirer_booklet_command";
import { FindbyCodeBookletCommand } from "../../domain/command/find_by_code_booklet_command";
import { ListAllBookletCommand } from "../../domain/command/list_all_booklet_command";
import { singletonDeleteBookletUseCase } from "../../domain/usecase/delete_booklet_usecase";
import { singletonFindByAcquirerIdBookletUseCase } from "../../domain/usecase/find_by_acquirer_id_booklet_usecase";
import { singletonFindByCodeBookletUseCase } from "../../domain/usecase/find_by_code_booklet_usecase";
import { singletonFindByIdBookletUseCase } from "../../domain/usecase/find_by_id_booklet_usecase";
import { singletonListBookletUseCase } from "../../domain/usecase/list_booklet_usecase";
import { singletonUpdateBookletUseCase } from "../../domain/usecase/update_booklet_usecase";
import { DeleteByCodeBookletController } from "../../infra/controller/delete_by_code_booklet_controller";
import { FindByAcquirerBookletController } from "../../infra/controller/find_by_acquirer_id_booklet_controller";
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

// ? Find By Acquirer Id Booklet
const findbyAcquirerIdBookletCommand = new FindbyAcquirerBookletCommand(
  singletonFindByAcquirerIdBookletUseCase,
);
const findByAcquirerIdBookletController = new FindByAcquirerBookletController(
  findbyAcquirerIdBookletCommand,
);

// ? Update Booklet
const addPaymentToBookletCommand = new AddPaymentToBookletCommand(
  singletonFindByIdBookletUseCase,
  singletonSetNewStatusOfBookletPaymentUseCase,
  singletonCreateBookletPaymentUseCase,
  singletonUpdateBookletUseCase,
);
const updateBookletController = new UpdateBookletController(
  addPaymentToBookletCommand,
);

// ? Delete Booklet

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
  findByAcquirerIdBookletController,
  updateBookletController,
  deleteByCodeBookletController,
};
