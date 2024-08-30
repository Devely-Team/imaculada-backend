import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { findByCPFAcquirerUseCase } from "../usecase/find_by_cpf_acquirer_usecase";

export async function findbyCPFAcquirerCommand(input: string, user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await findByCPFAcquirerUseCase(input);
}
