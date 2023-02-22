import { FindByIdAcquirerUseCase } from "../usecase/find_by_id_acquirer_usecase";

class FindbyIdAcquirerCommand {
  constructor(private usecase: FindByIdAcquirerUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyIdAcquirerCommand };
