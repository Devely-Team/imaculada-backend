import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";
import { Campaign } from "../model/campaign";

class FindByIdCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(id: string): AsyncResult<Campaign> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdCampaignUseCase = new FindByIdCampaignUseCase(
  singletonCampaignRepository,
);

export { FindByIdCampaignUseCase, singletonFindByIdCampaignUseCase };
