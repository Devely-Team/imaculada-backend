import { hasAccess } from "../../../../../core/tools/has_access";
import { Account } from "../model/account";
import { ListAccountUseCase } from "../usecase/list_account_usecase";

class ListAllAccountCommand {
  constructor(private usecase: ListAccountUseCase) {}

  async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_all_usuarios",
      "listar todos os usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute();
  }
}

export { ListAllAccountCommand };
