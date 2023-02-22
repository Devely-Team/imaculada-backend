import { DeleteAcquirerUseCase } from "../usecase/delete_acquirer_usecase";

class DeleteAcquirerCommand {
  constructor(private usecase: DeleteAcquirerUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteAcquirerCommand };
