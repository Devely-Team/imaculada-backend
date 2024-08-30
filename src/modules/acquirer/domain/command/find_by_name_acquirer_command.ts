import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { findByNameAcquirerUseCase } from "../usecase/find_by_name_acquirer_usecase";

export async function findbyNameAcquirerCommand(input: string, user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await findByNameAcquirerUseCase(input);
}
