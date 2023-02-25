import { UpdateBookletDTO } from "../dto/update_booklet_dto";
import { UpdateBookletUseCase } from "../usecase/update_booklet_usecase";

class UpdateBookletCommand {
  constructor(private usecase: UpdateBookletUseCase) {}

  async execute(input: UpdateBookletDTO, id: string) {
    return await this.usecase.execute({
      id,
      isPaid: input.isPaid,
      payDay: input.payDay,
      createdAt: new Date(),
      updatedAt: new Date(),
      acquirerId: "",
      campaignId: "",
      codeBooklet: 0,
      quota: 0,
    });
  }
}

export { UpdateBookletCommand };
