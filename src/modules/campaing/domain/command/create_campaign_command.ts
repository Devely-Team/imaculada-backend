import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { CreateCampaignDTO } from "../dto/create_campaign_dto";
import { CreateCampaignUseCase } from "../usecase/create_campaign.usecase";

class CreateCampaignCommand {
  constructor(
    private usecase: CreateCampaignUseCase = new CreateCampaignUseCase(),
  ) {}

  async execute(input: CreateCampaignDTO, user: Account) {
    const accessDenied = hasAccess(
      user,
      "create_campaign",
      "criar novas campanhas.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

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
