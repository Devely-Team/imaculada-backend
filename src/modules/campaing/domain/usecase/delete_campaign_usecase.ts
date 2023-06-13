import { AsyncResult } from "../../../../core/tools/result_type";
import { deleteCampaign } from "../../infra/repositories/campaign_repository";

export async function deleteCampaignUseCase(id: string): AsyncResult<boolean> {
  return await deleteCampaign(id);
}
