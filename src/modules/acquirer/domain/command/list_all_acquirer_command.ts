import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { listAllAcquirer } from "../../infra/repositories/acquirer_repository";

class ListAllAcquirerCommand {
  static async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_all_purchaser",
      "listar todos os adquirentes.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await listAllAcquirer();
  }
}

export { ListAllAcquirerCommand };
