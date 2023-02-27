import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { Failure } from "../../../../core/tools/result_type";
import { FindByIdAcquirerUseCase } from "../../../acquirer/domain/usecase/find_by_id_acquirer_usecase";
import { FindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { CreateBookletDTO } from "../dto/create_booklet_dto";
import { Booklet } from "../model/booklet";
import { CreateBookletUseCase } from "../usecase/create_booklet_usecase";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

class CreateBookletCommand {
  constructor(
    private usecase: CreateBookletUseCase,
    private findByCode: FindByCodeBookletUseCase,
    private acquirerUseCase: FindByIdAcquirerUseCase,
    private campaignUseCase: FindByIdCampaignUseCase,
  ) {}

  async execute(input: CreateBookletDTO) {
    const campaign = await this.campaignUseCase.execute(input.campaignId);
    if (campaign.ok === false) {
      return campaign;
    }

    const acquirer = await this.acquirerUseCase.execute(input.acquirerId);
    if (acquirer.ok === false) {
      return acquirer;
    }

    const booklets = await this.findByCode.execute(input.codeBooklet);
    if (booklets.ok && booklets.value.length > 0) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.objectValidation,
          "Numero do carnê ja usado por outro adquirente",
          "Numero do carnê ja usado por outro adquirente",
        ),
      );
    }

    const bookletOfAcquirer: Booklet[] = [];
    for (let index = 1; index <= campaign.value.quota; index++) {
      bookletOfAcquirer.push(
        new Booklet({
          id: "",
          acquirerId: acquirer.value.id,
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

    return this.usecase.execute(bookletOfAcquirer);
  }
}

export { CreateBookletCommand };
