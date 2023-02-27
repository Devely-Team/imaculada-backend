import { DeleteBookletUseCase } from "../usecase/delete_booklet_usecase";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class DeleteByCodeBookletCommand {
  constructor(
    private usecase: DeleteBookletUseCase,
    private findByCode: FindByCodeBookletUseCase,
  ) {}

  async execute(input: number) {
    return await this.usecase.execute(input);
  }
}

export { DeleteByCodeBookletCommand };
