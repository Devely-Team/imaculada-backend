import { AsyncResult } from "../../../../core/tools/result_type";
import { updateCampaign } from "../../infra/repositories/campaign_repository";
import { Campaign, CampaignProps } from "../model/campaign";

export async function updateCampaignUseCase(
  input: CampaignProps,
): AsyncResult<boolean> {
  const account = new Campaign(input);
  return await updateCampaign(account);
}
