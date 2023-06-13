import { AsyncResult } from "../../../../core/tools/result_type";
import { findByIdCampaign } from "../../infra/repositories/campaign_repository";
import { Campaign } from "../model/campaign";

export async function findByIdCampaignUseCase(
  id: string,
): AsyncResult<Campaign> {
  return await findByIdCampaign(id);
}
