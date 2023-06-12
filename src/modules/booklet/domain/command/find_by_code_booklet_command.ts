import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class FindbyCodeBookletCommand {
  static async execute(input: number, user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "procurar pelo numero do carnê, os carnês do adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await FindByCodeBookletUseCase.execute(input);
  }
}

export { FindbyCodeBookletCommand };
