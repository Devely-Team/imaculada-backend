import { ListCampaignUseCase } from "../usecase/list_campaign_usecase";

class ListAllCampaignCommand {
  constructor(private usecase: ListCampaignUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllCampaignCommand };
