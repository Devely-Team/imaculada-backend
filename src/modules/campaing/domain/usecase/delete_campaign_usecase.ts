import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { singletonCampaignRepository } from "../../infra/repositories/campaign_repository.instance";

class DeleteCampaignUseCase {
  constructor(private repo: CampaignReposity) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

const singletonDeleteCampaignUseCase = new DeleteCampaignUseCase(
  singletonCampaignRepository,
);

export { DeleteCampaignUseCase, singletonDeleteCampaignUseCase };
