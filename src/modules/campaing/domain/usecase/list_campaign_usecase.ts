import { AsyncResult } from "../../../../core/tools/result_type";
import { listAllCampaign } from "../../infra/repositories/campaign_repository";
import { Campaign } from "../model/campaign";

export async function listCampaignUseCase(): AsyncResult<Campaign[]> {
  return await listAllCampaign();
}
