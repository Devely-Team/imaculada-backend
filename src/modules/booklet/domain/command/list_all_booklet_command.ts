import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { ListBookletUseCase } from "../usecase/list_booklet_usecase";

class ListAllBookletCommand {
  constructor(private usecase: ListBookletUseCase) {}

  async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "listar os carnês do adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await this.usecase.execute();

    if (result.ok === false) {
      return result;
    }

    return result;
  }
}

export { ListAllBookletCommand };
