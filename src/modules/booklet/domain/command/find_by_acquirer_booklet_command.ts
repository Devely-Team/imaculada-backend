import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { FindByAcquirerIdBookletUseCase } from "../usecase/find_by_acquirer_id_booklet_usecase";

class FindbyAcquirerBookletCommand {
  static async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "procurar pelo identificador do adquirente, os carnês.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await FindByAcquirerIdBookletUseCase.execute(input);
  }
}

export { FindbyAcquirerBookletCommand };
