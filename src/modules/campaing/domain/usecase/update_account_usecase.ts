import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";
import { Campaign, CampaignProps } from "../model/campaign";

class UpdateCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(input: CampaignProps): AsyncResult<boolean> {
    const account = new Campaign(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.update(account);
  }
}

const singletonUpdateCampaignUseCase = new UpdateCampaignUseCase(
  singletonCampaignRepository,
);

export { UpdateCampaignUseCase, singletonUpdateCampaignUseCase };
