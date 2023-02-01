import { DeleteAccountUseCase } from "../usecase/delete_account_usecase";

class DeleteAccountCommand {
  constructor(private usecase: DeleteAccountUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteAccountCommand };
