import { FindByIdAccountUseCase } from "../usecase/find_by_id_account_usecase";

class FindbyIdAccountCommand {
  static async execute(input: string) {
    return await FindByIdAccountUseCase.execute(input);
  }
}

export { FindbyIdAccountCommand };
