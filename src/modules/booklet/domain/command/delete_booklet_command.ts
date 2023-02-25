import { DeleteBookletUseCase } from "../usecase/delete_booklet_usecase";

class DeleteBookletCommand {
  constructor(private usecase: DeleteBookletUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteBookletCommand };
