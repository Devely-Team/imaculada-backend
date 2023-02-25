import { ListBookletUseCase } from "../usecase/list_booklet_usecase";

class ListAllBookletCommand {
  constructor(private usecase: ListBookletUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllBookletCommand };
