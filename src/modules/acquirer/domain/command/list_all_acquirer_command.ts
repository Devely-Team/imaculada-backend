import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { listAllAcquirer } from "../../infra/repositories/acquirer_repository";

export async function listAllAcquirerCommand(
  user: Account,
  campaignId: string,
) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await listAllAcquirer(campaignId);
}
