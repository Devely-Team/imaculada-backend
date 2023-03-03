import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { ListAcquirerUseCase } from "../usecase/list_acquirer_usecase";

class ListAllAcquirerCommand {
  constructor(private usecase: ListAcquirerUseCase) {}

  async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_all_purchaser",
      "listar todos os adquirentes.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute();
  }
}

export { ListAllAcquirerCommand };
