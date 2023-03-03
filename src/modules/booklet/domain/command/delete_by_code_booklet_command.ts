import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { DeleteBookletUseCase } from "../usecase/delete_booklet_usecase";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class DeleteByCodeBookletCommand {
  constructor(
    private usecase: DeleteBookletUseCase,
    private findByCode: FindByCodeBookletUseCase,
  ) {}

  async execute(input: number, user: Account) {
    const accessDenied = hasAccess(
      user,
      "delete_booklet",
      "criar o adquirente e seus carnês",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }
    return await this.usecase.execute(input);
  }
}

export { DeleteByCodeBookletCommand };
