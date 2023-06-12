import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";

class FindbyIdAcquirerCommand {
  static async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_all_purchaser",
      "listar todos os adquirentes",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await AcquirerReposity.findById(input);
  }
}

export { FindbyIdAcquirerCommand };
