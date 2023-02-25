import { ListAccountUseCase } from "../usecase/list_account_usecase";

class ListAllAccountCommand {
  constructor(private usecase: ListAccountUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllAccountCommand };
