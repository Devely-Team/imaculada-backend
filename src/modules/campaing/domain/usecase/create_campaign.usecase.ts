import { AsyncResult } from "../../../../core/tools/result_type";
import { createCampaign } from "../../infra/repositories/campaign_repository";
import { Campaign, CampaignProps } from "../model/campaign";

export async function createCampaignUseCase(
  input: CampaignProps,
): AsyncResult<string> {
  const account = new Campaign(input);

  // const result = profile.validations(profile);

  // if (result.ok === false) {
  //   return result;
  // }

  return await createCampaign(account);
}
