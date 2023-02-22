import { singletonCreateBookletUseCase } from "../../../booklet/domain/usecase/create_acquirer_usecase";
import { singletonFindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { CreateAcquirerCommand } from "../../domain/command/create_acquirer_command";
import { DeleteAcquirerCommand } from "../../domain/command/delete_acquirer_command";
import { FindbyIdAcquirerCommand } from "../../domain/command/find_by_id_acquirer_command";
import { ListAllAcquirerCommand } from "../../domain/command/list_all_acquirer_command";
import { UpdateAcquirerCommand } from "../../domain/command/update_acquirer_command";
import { singletonCreateAcquirerUseCase } from "../../domain/usecase/create_acquirer_usecase";
import { singletonDeleteAcquirerUseCase } from "../../domain/usecase/delete_acquirer_usecase";
import { singletonFindByIdAcquirerUseCase } from "../../domain/usecase/find_by_id_acquirer_usecase";
import { singletonListAcquirerUseCase } from "../../domain/usecase/list_acquirer_usecase";
import { singletonUpdateAcquirerUseCase } from "../../domain/usecase/update_acquirer_usecase";
import { CreateAcquirerController } from "../../infra/controller/create_acquirer_controller";
import { DeleteAcquirerController } from "../../infra/controller/delete_acquirer_controller";
import { FindByIdAcquirerController } from "../../infra/controller/find_by_id_acquirer_controller";
import { ListAllAcquirerController } from "../../infra/controller/list_all_acquirer_controller";
import { UpdateAcquirerController } from "../../infra/controller/update_acquirer_controller";

// ? Create Acquirer
const createAcquirerCommand = new CreateAcquirerCommand(
  singletonCreateAcquirerUseCase,
  singletonFindByIdCampaignUseCase,
  singletonCreateBookletUseCase,
);
const createAcquirerController = new CreateAcquirerController(
  createAcquirerCommand,
);

// ? List All Acquirer
const listAllAcquirerCommand = new ListAllAcquirerCommand(
  singletonListAcquirerUseCase,
);
const listAllAcquirerController = new ListAllAcquirerController(
  listAllAcquirerCommand,
);

// ? Find By Id Acquirer
const findbyIdAcquirerCommand = new FindbyIdAcquirerCommand(
  singletonFindByIdAcquirerUseCase,
);
const findByIdAcquirerController = new FindByIdAcquirerController(
  findbyIdAcquirerCommand,
);

// ? Update Acquirer
const updateAcquirerCommand = new UpdateAcquirerCommand(
  singletonUpdateAcquirerUseCase,
);
const updateAcquirerController = new UpdateAcquirerController(
  updateAcquirerCommand,
);

// ? Delete Acquirer
const deleteAcquirerCommand = new DeleteAcquirerCommand(
  singletonDeleteAcquirerUseCase,
);
const deleteAcquirerController = new DeleteAcquirerController(
  deleteAcquirerCommand,
);

// * Export controllers

export {
  createAcquirerController,
  listAllAcquirerController,
  findByIdAcquirerController,
  updateAcquirerController,
  deleteAcquirerController,
};
