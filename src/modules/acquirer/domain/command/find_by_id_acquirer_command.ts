import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { findByIdAcquirer } from "../../infra/repositories/acquirer_repository";

export async function findbyIdAcquirerCommand(input: string, user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await findByIdAcquirer(input);
}
