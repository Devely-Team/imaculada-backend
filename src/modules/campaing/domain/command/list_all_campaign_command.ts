import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { listCampaignUseCase } from "../usecase/list_campaign_usecase";

export async function listAllCampaignCommand(user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_campaign",
    "listar todas as campanha.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await listCampaignUseCase();
}
