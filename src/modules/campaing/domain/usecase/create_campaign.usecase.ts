import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";
import { Campaign, CampaignProps } from "../model/campaign";

class CreateCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(input: CampaignProps): AsyncResult<string> {
    const account = new Campaign(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.create(account);
  }
}

const singletonCreateCampaignUseCase = new CreateCampaignUseCase(
  singletonCampaignRepository,
);

export { CreateCampaignUseCase, singletonCreateCampaignUseCase };
