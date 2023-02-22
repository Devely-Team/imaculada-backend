import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class FindbyCodeBookletCommand {
  constructor(private usecase: FindByCodeBookletUseCase) {}

  async execute(input: number) {
    return await this.usecase.execute(input);
  }
}

export { FindbyCodeBookletCommand };
