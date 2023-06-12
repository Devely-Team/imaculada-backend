import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { CampaignReposityInstance } from "../../infra/repositories/campaign_repository.instance";
import { Campaign, CampaignProps } from "../model/campaign";

class UpdateCampaignUseCase {
  constructor(
    private repo: CampaignReposity = new CampaignReposityInstance(),
  ) {}

  async execute(input: CampaignProps): AsyncResult<boolean> {
    const account = new Campaign(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.update(account);
  }
}

export { UpdateCampaignUseCase };
