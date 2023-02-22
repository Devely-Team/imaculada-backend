import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";
import { Campaign } from "../model/campaign";

class ListCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(): AsyncResult<Campaign[]> {
    return await this.repo.listAll();
  }
}

const singletonListCampaignUseCase = new ListCampaignUseCase(
  singletonCampaignRepository,
);

export { ListCampaignUseCase, singletonListCampaignUseCase };
