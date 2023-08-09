import { hasAccess } from "../../../../core/tools/has_access";
import { Success } from "../../../../core/tools/result_type";
import { Account } from "../../../user/account/domain/model/account";
import { countAcquirer } from "../../infra/repositories/acquirer_repository";

export async function paginationAcquirerCommand(user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  const pageSize = 10; // Tamanho da página (número de resultados por página)

  const result = await countAcquirer(); // Conta o total de resultados

  if (result.ok === false) {
    return result;
  }

  const totalPages = Math.ceil(result.value / pageSize); // Calcula o total de páginas

  return Success({ lastPage: totalPages });
}
