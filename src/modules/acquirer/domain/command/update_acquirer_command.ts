import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateAcquirerDTO } from "../dto/update_acquirer_dto";
import { UpdateAcquirerUseCase } from "../usecase/update_acquirer_usecase";

class UpdateAcquirerCommand {
  constructor(
    private usecase: UpdateAcquirerUseCase = new UpdateAcquirerUseCase(),
  ) {}

  async execute(input: UpdateAcquirerDTO, id: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "update_purchaser",
      "atualizar o adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }
    // const result = inputAcquirerValidation(input);

    return await this.usecase.execute({
      createdAt: new Date(),
      updatedAt: new Date(),
      booklet: [],
      cpf: "",
      id,
      name: input.name,
      landline: input.landline,
      whatsapp: input.whatsapp,
      phone: input.phone,
      address: input.acquirerAddress.address,
      cep: input.acquirerAddress.cep,
      neighborhood: input.acquirerAddress.neighborhood,
    });
  }
}

export { UpdateAcquirerCommand };
