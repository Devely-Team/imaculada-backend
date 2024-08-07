import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { singletonCreateBookletUseCase } from "../../../booklet/domain/usecase/create_booklet_usecase";
import { singletonDeleteBookletUseCase } from "../../../booklet/domain/usecase/delete_booklet_usecase";
import { singletonFindByCodeBookletUseCase } from "../../../booklet/domain/usecase/find_by_code_booklet_usecase";
import { FindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { CampaignReposityInstance } from "../../../campaing/infra/repositories/campaign_repository.instance";
import { AddBookletToAcquirerCommand } from "../../domain/command/add_booklet_to_acquirer_command";
import { CreateAcquirerCommand } from "../../domain/command/create_acquirer_command";
import { DeleteAcquirerCommand } from "../../domain/command/delete_acquirer_command";
import { FindbyIdAcquirerCommand } from "../../domain/command/find_by_id_acquirer_command";
import { ListAllAcquirerCommand } from "../../domain/command/list_all_acquirer_command";
import { RemoveBookletToAcquirerCommand } from "../../domain/command/remove_booklet_to_acquirer_command";
import { UpdateAcquirerCommand } from "../../domain/command/update_acquirer_command";
import { singletonCreateAcquirerUseCase } from "../../domain/usecase/create_acquirer_usecase";
import { singletonDeleteAcquirerUseCase } from "../../domain/usecase/delete_acquirer_usecase";
import { singletonFindByIdAcquirerUseCase } from "../../domain/usecase/find_by_id_acquirer_usecase";
import { singletonListAcquirerUseCase } from "../../domain/usecase/list_acquirer_usecase";
import { singletonUpdateAcquirerUseCase } from "../../domain/usecase/update_acquirer_usecase";
import { AddBookletToAcquirerController } from "../../infra/controller/add_booklet_to_acquirer_controller";
import { CreateAcquirerController } from "../../infra/controller/create_acquirer_controller";
import { DeleteAcquirerController } from "../../infra/controller/delete_acquirer_controller";
import { FindByIdAcquirerController } from "../../infra/controller/find_by_id_acquirer_controller";
import { ListAllAcquirerController } from "../../infra/controller/list_all_acquirer_controller";
import { RemoveBookletToAcquirerController } from "../../infra/controller/remove_booklet_to_acquirer_controller";
import { UpdateAcquirerController } from "../../infra/controller/update_acquirer_controller";

const singletonFindByIdCampaignUseCase = new FindByIdCampaignUseCase(
  new CampaignReposityInstance(databaseClientSingleton),
);

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

// ? Add Booklet To Acquirer
const addBookletToAcquirerCommand = new AddBookletToAcquirerCommand(
  singletonCreateBookletUseCase,
  singletonFindByIdCampaignUseCase,
);
const addBookletToAcquirerController = new AddBookletToAcquirerController(
  addBookletToAcquirerCommand,
);

// ? Remove Booklet To Acquirer
const removeBookletToAcquirerCommand = new RemoveBookletToAcquirerCommand(
  singletonFindByCodeBookletUseCase,
  singletonDeleteBookletUseCase,
);
const removeBookletToAcquirerController = new RemoveBookletToAcquirerController(
  removeBookletToAcquirerCommand,
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
  addBookletToAcquirerController,
  removeBookletToAcquirerController,
};
