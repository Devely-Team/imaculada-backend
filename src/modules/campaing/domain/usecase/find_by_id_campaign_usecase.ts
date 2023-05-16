import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../core/tools/result_type";
import { CampaignReposity } from "../../infra/repositories/campaign_repository";
import { CampaignReposityInstance } from "../../infra/repositories/campaign_repository.instance";
import { Campaign } from "../model/campaign";

class FindByIdCampaignUseCase {
  constructor(
    private repo: CampaignReposity = new CampaignReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(id: string): AsyncResult<Campaign> {
    return await this.repo.findById(id);
  }
}

export { FindByIdCampaignUseCase };
