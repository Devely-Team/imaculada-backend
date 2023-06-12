import { hasAccess } from "../../../../../core/tools/has_access";
import { Account } from "../model/account";
import { DeleteAccountUseCase } from "../usecase/delete_account_usecase";

class DeleteAccountCommand {
  static async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "update_user",
      "inativar usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await DeleteAccountUseCase.execute(input);
  }
}

export { DeleteAccountCommand };
