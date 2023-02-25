import { CreateCampaignCommand } from "../../domain/command/create_campaign_command";
import { DeleteCampaignCommand } from "../../domain/command/delete_campaign_command";
import { FindbyIdCampaignCommand } from "../../domain/command/find_by_id_campaign_command";
import { ListAllCampaignCommand } from "../../domain/command/list_all_campaign_command";
import { UpdateCampaignCommand } from "../../domain/command/update_campaign_command";
import { singletonCreateCampaignUseCase } from "../../domain/usecase/create_campaign.usecase";
import { singletonDeleteCampaignUseCase } from "../../domain/usecase/delete_campaign_usecase";
import { singletonFindByIdCampaignUseCase } from "../../domain/usecase/find_by_id_campaign_usecase";
import { singletonListCampaignUseCase } from "../../domain/usecase/list_campaign_usecase";
import { singletonUpdateCampaignUseCase } from "../../domain/usecase/update_account_usecase";
import { CreateCampaignController } from "../../infra/controller/create_campaign_controller";
import { DeleteCampaignController } from "../../infra/controller/delete_campaign_controller";
import { FindByIdCampaignController } from "../../infra/controller/find_by_id_campaign_controller";
import { ListAllCampaignController } from "../../infra/controller/list_all_account_controller";
import { UpdateCampaignController } from "../../infra/controller/update_account_controller";

// ? Create Campaign
const createCampaignCommand = new CreateCampaignCommand(
  singletonCreateCampaignUseCase,
);
const createCampaignController = new CreateCampaignController(
  createCampaignCommand,
);

// ? List All Campaign
const listAllCampaignCommand = new ListAllCampaignCommand(
  singletonListCampaignUseCase,
);
const listAllCampaignController = new ListAllCampaignController(
  listAllCampaignCommand,
);

// ? Find By Id Campaign
const findbyIdCampaignCommand = new FindbyIdCampaignCommand(
  singletonFindByIdCampaignUseCase,
);
const findByIdCampaignController = new FindByIdCampaignController(
  findbyIdCampaignCommand,
);

// ? Update Campaign
const updateCampaignCommand = new UpdateCampaignCommand(
  singletonUpdateCampaignUseCase,
);
const updateCampaignController = new UpdateCampaignController(
  updateCampaignCommand,
);

// ? Delete Campaign
const deleteCampaignCommand = new DeleteCampaignCommand(
  singletonDeleteCampaignUseCase,
);
const deleteCampaignController = new DeleteCampaignController(
  deleteCampaignCommand,
);

// * Export controllers

export {
  createCampaignController,
  listAllCampaignController,
  findByIdCampaignController,
  updateCampaignController,
  deleteCampaignController,
};
