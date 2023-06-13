import { AsyncResult } from "../../../../core/tools/result_type";
import { findByTitleCampaign } from "../../infra/repositories/campaign_repository";
import { Campaign } from "../model/campaign";

export async function findByTitleCampaignUseCase(
  email: string,
): AsyncResult<Campaign> {
  return await findByTitleCampaign(email);
}
