import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { DeleteAcquirerUseCase } from "../usecase/delete_acquirer_usecase";

class DeleteAcquirerCommand {
  constructor(
    private usecase: DeleteAcquirerUseCase = new DeleteAcquirerUseCase(),
  ) {}

  async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "delete_purchaser",
      "deletar o adquirente e seus carnês",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute(input);
  }
}

export { DeleteAcquirerCommand };
