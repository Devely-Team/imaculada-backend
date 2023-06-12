import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { FindByIdAcquirerUseCase } from "../usecase/find_by_id_acquirer_usecase";

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

    return await FindByIdAcquirerUseCase.execute(input);
  }
}

export { FindbyIdAcquirerCommand };
