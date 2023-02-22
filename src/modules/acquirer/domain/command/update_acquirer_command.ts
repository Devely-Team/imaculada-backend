import { UpdateAcquirerDTO } from "../dto/update_acquirer_dto";
import { UpdateAcquirerUseCase } from "../usecase/update_acquirer_usecase";

class UpdateAcquirerCommand {
  constructor(private usecase: UpdateAcquirerUseCase) {}

  async execute(input: UpdateAcquirerDTO, id: string) {
    // const result = inputAcquirerValidation(input);

    return await this.usecase.execute({
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      booklet: input.booklet,
      name: input.name,
      landline: input.landline,
      cpf: input.cpf,
      whatsapp: input.whatsapp,
    });
  }
}

export { UpdateAcquirerCommand };
