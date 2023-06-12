import { hasAccess } from "../../../../../core/tools/has_access";
import { Account } from "../model/account";
import { ListAccountUseCase } from "../usecase/list_account_usecase";

class ListAllAccountCommand {
  static async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_all_usuarios",
      "listar todos os usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await ListAccountUseCase.execute();
  }
}

export { ListAllAccountCommand };
