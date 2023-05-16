import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { CampaignReposityInstance } from "../../infra/repositories/campaign_repository.instance";

class DeleteCampaignUseCase {
  constructor(
    private repo: CampaignReposity = new CampaignReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

export { DeleteCampaignUseCase };
