import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";
import { Campaign } from "../model/campaign";

class FindByTitleCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(email: string): AsyncResult<Campaign> {
    return await this.repo.findByTitle(email);
  }
}

const singletonFindByTitleCampaignUseCase = new FindByTitleCampaignUseCase(
  singletonCampaignRepository,
);

export { FindByTitleCampaignUseCase, singletonFindByTitleCampaignUseCase };
