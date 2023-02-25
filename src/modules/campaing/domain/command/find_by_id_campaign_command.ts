import { FindByIdCampaignUseCase } from "../usecase/find_by_id_campaign_usecase";

class FindbyIdCampaignCommand {
  constructor(private usecase: FindByIdCampaignUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyIdCampaignCommand };
