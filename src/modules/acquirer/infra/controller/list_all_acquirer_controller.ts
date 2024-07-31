import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { listAllAcquirerCommand } from "../../domain/command/list_all_acquirer_command";

export async function listAllAcquirerController({
  request,
  response,
}: InputBase): Output {
  const { campaign_id } = request.query; // Supondo que o campaignId seja um parâmetro de rota

  listAllAcquirerCommand(request.user as Account, campaign_id as string)
    .then(result => escaping(result, request, response, StatusCodes.Success))
    .catch(error => onError(error, request, response));
}
