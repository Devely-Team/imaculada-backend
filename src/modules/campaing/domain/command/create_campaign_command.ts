import { CreateCampaignDTO } from "../dto/create_campaign_dto";
import { CreateCampaignUseCase } from "../usecase/create_campaign.usecase";

class CreateCampaignCommand {
  constructor(private usecase: CreateCampaignUseCase) {}

  async execute(input: CreateCampaignDTO) {
    // const result = inputCampaignValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.usecase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      title: input.title,
      description: input.description,
      quota: input.quota,
      startedDate: input.startedDate,
    });
  }
}

export { CreateCampaignCommand };
