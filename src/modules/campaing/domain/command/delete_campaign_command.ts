import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { deleteCampaignUseCase } from "../usecase/delete_campaign_usecase";

export async function deleteCampaignCommand(input: string, user: Account) {
  const accessDenied = hasAccess(
    user,
    "delete_campaign",
    "deletar novas campanhas.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await deleteCampaignUseCase(input);
}
