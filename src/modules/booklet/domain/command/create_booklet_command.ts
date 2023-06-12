import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../../acquirer/infra/repositories/acquirer_repository";
import { FindByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { Account } from "../../../user/account/domain/model/account";
import { CreateBookletDTO } from "../dto/create_booklet_dto";
import { Booklet } from "../model/booklet";
import { CreateBookletUseCase } from "../usecase/create_booklet_usecase";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";

export class CreateBookletCommand {
  static async execute(input: CreateBookletDTO, user: Account) {
    const campaignUseCase = new FindByIdCampaignUseCase();

    const accessDenied = hasAccess(
      user,
      "create_booklet",
      "criar os carnês do adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const campaign = await campaignUseCase.execute(input.campaignId);
    if (campaign.ok === false) {
      return campaign;
    }

    const acquirer = await AcquirerReposity.findById(input.acquirerId);
    if (acquirer.ok === false) {
      return acquirer;
    }

    const booklets = await FindByCodeBookletUseCase.execute(input.codeBooklet);
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
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );
    }

    return CreateBookletUseCase.execute(bookletOfAcquirer);
  }
}
