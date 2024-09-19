import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { Booklet } from "../../../booklet/domain/model/booklet";
import { CreateBookletUseCase } from "../../../booklet/domain/usecase/create_booklet_usecase";
import { findByIdCampaignUseCase } from "../../../campaing/domain/usecase/find_by_id_campaign_usecase";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateBookletAcquirerDTO } from "../dto/update_acquirer_dto";

export async function addBookletToAcquirerCommand(
  acquirerId: string,
  input: UpdateBookletAcquirerDTO,
  user: Account,
) {
  const accessDenied = hasAccess(
    user,
    "add_new_booklet_to_acquirer",
    "Adicionar novos carnês ao adquirente.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  const campaign = await findByIdCampaignUseCase(input.campaignId);

  if (campaign.ok === false) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.databaseError,
        "Campanha não encontrada",
        "Campanha não existe a parti dos dados informados",
      ),
    );
  }

  const bookletOfAcquirer: Booklet[] = [];
  input.codeBooklet.forEach(element => {
    for (let index = 1; index <= campaign.value.quota; index++) {
      bookletOfAcquirer.push(
        new Booklet({
          id: "",
          acquirerId,
          campaignId: campaign.value.id,
          codeBooklet: element.code,
          quota: index,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );
    }
  });

  console.log("input: ", bookletOfAcquirer);

  return await CreateBookletUseCase.execute(bookletOfAcquirer);
}
