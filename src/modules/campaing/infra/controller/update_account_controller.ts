import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { updateCampaignCommand } from "../../domain/command/update_campaign_command";
import { UpdateCampaignDTO } from "../../domain/dto/update_campaign_dto";

export async function updateCampaignController({
  request,
  response,
}: Input<UpdateCampaignDTO>): Output {
  updateCampaignCommand(
    request.body,
    request.query.id as string,
    request.user as Account,
  )
    .then(result => escaping(result, request, response, StatusCodes.Success))
    .catch(error => onError(error, request, response));
}
