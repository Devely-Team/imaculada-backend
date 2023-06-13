import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { deleteAcquirer } from "../../infra/repositories/acquirer_repository";

export async function deleteAcquirerCommand(input: string, user: Account) {
  const accessDenied = hasAccess(
    user,
    "delete_purchaser",
    "deletar o adquirente e seus carnês",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await deleteAcquirer(input);
}
