import { ListAcquirerUseCase } from "../usecase/list_acquirer_usecase";

class ListAllAcquirerCommand {
  constructor(private usecase: ListAcquirerUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllAcquirerCommand };
