import { hasAccess } from "../../../../../core/tools/has_access";
import { Account } from "../model/account";
import { DeleteAccountUseCase } from "../usecase/delete_account_usecase";

class DeleteAccountCommand {
  constructor(
    private usecase: DeleteAccountUseCase = new DeleteAccountUseCase(),
  ) {}

  async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "update_user",
      "inativar usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute(input);
  }
}

export { DeleteAccountCommand };
