import { FindByIdAccountUseCase } from "../usecase/find_by_id_account_usecase";

class FindbyIdAccountCommand {
  constructor(
    private usecase: FindByIdAccountUseCase = new FindByIdAccountUseCase(),
  ) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyIdAccountCommand };
