import { DeleteCampaignUseCase } from "../usecase/delete_campaign_usecase";

class DeleteCampaignCommand {
  constructor(private usecase: DeleteCampaignUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteCampaignCommand };
