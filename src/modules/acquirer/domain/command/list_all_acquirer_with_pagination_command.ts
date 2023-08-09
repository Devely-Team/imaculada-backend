import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { listAllAcquirerWithPagination } from "../../infra/repositories/acquirer_repository";

export async function listAllAcquirerWithPaginationCommand(
  user: Account,
  page: number,
) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await listAllAcquirerWithPagination(page);
}
