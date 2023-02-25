import { UpdateCampaignDTO } from "../dto/update_campaign_dto";
import { UpdateCampaignUseCase } from "../usecase/update_account_usecase";

class UpdateCampaignCommand {
  constructor(private usecase: UpdateCampaignUseCase) {}

  async execute(input: UpdateCampaignDTO, id: string) {
    // const result = inputCampaignValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    // if (tokenId === "") {
    //   return Failure(
    //     new BadRequestError(
    //       BaseErrorCodes.stringValidation,
    //       "Recuperar o id apartir do token.",
    //       "Erro no fluxo de recuperar o id a partir do token.",
    //     ),
    //   );
    // }

    // if (tokenId === id) {
    //   return Failure(
    //     new BadRequestError(
    //       BaseErrorCodes.stringValidation,
    //       "Usuario não pode ser dar o acesso",
    //       "Voce não pode ser conceder o acesso, favor solicitar para outro usuario",
    //     ),
    //   );
    // }

    return await this.usecase.execute({
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: input.isActive,
      title: input.title,
      description: input.description,
      quota: input.quota,
      startedDate: input.startedDate,
    });
  }
}

export { UpdateCampaignCommand };
