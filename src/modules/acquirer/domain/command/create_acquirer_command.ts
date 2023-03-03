import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { Booklet } from "../../../booklet/domain/model/booklet";
import { CreateBookletUseCase } from "../../../booklet/domain/usecase/create_booklet_usecase";
import { FindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { Account } from "../../../user/account/domain/model/account";
import { CreateAcquirerDTO } from "../dto/create_acquirer_dto";
import { CreateAcquirerUseCase } from "../usecase/create_acquirer_usecase";

class CreateAcquirerCommand {
  constructor(
    private usecase: CreateAcquirerUseCase,
    private usecaseCampaign: FindByIdCampaignUseCase,
    private usecaseBooklet: CreateBookletUseCase,
  ) {}

  async execute(input: CreateAcquirerDTO, user: Account) {
    const accessDenied = hasAccess(
      user,
      "create_purchaser",
      "criar o adquirente e seus carnês",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

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
      address: input.acquirerAddress.address,
      cep: input.acquirerAddress.cep,
      neighborhood: input.acquirerAddress.neighborhood,
      phone: input.phone,
      name: input.name,
      landline: input.landline,
      cpf: input.cpf,
      whatsapp: input.whatsapp,
    });

    if (acquirer.ok === false) {
      return acquirer;
    }

    const bookletOfAcquirer: Booklet[] = [];
    input.codeBooklet.forEach(element => {
      for (let index = 1; index <= campaign.value.quota; index++) {
        bookletOfAcquirer.push(
          new Booklet({
            id: "",
            acquirerId: acquirer.value,
            campaignId: campaign.value.id,
            codeBooklet: element.code,
            quota: index,
            payDay: new Date(),
            isPaid: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        );
      }
    });

    return await this.usecaseBooklet.execute(bookletOfAcquirer);
  }
}

export { CreateAcquirerCommand };
