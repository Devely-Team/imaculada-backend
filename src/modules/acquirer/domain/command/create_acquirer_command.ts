import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { Failure } from "../../../../core/tools/result_type";
import { Booklet } from "../../../booklet/domain/model/booklet";
import { CreateBookletUseCase } from "../../../booklet/domain/usecase/create_acquirer_usecase";
import { FindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { CreateAcquirerDTO } from "../dto/create_acquirer_dto";
import { CreateAcquirerUseCase } from "../usecase/create_acquirer_usecase";

class CreateAcquirerCommand {
  constructor(
    private usecase: CreateAcquirerUseCase,
    private usecaseCampaign: FindByIdCampaignUseCase,
    private usecaseBooklet: CreateBookletUseCase,
  ) {}

  async execute(input: CreateAcquirerDTO) {
    const campaign = await this.usecaseCampaign.execute(input.campaignId);

    if (campaign.ok === false) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.databaseError,
          "Campanha não encontrada",
          "Campanha não existe a parti dos dados informados",
        ),
      );
    }

    const acquirer = await this.usecase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      booklet: [],
      name: input.name,
      landline: input.landline,
      cpf: input.cpf,
      whatsapp: input.whatsapp,
    });

    if (acquirer.ok === false) {
      return acquirer;
    }

    const bookletOfAcquirer: Booklet[] = [];
    for (let index = 1; index <= campaign.value.quota; index++) {
      bookletOfAcquirer.push(
        new Booklet({
          id: "",
          acquirerId: acquirer.value,
          campaignId: campaign.value.id,
          codeBooklet: input.codeBooklet,
          quota: index,
          payDay: new Date(),
          isPaid: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );
    }

    return await this.usecaseBooklet.execute(bookletOfAcquirer);
  }
}

export { CreateAcquirerCommand };
