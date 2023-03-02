import { FindByAcquirerIdBookletUseCase } from "../usecase/find_by_acquirer_id_booklet_usecase";

class FindbyAcquirerBookletCommand {
  constructor(private usecase: FindByAcquirerIdBookletUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyAcquirerBookletCommand };
