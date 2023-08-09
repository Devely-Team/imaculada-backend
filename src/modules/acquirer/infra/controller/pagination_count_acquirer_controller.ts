import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { paginationAcquirerCommand } from "../../domain/command/pagination_count_acquirer_command";

export async function paginationAcquirerController({
  request,
  response,
}: InputBase): Output {
  paginationAcquirerCommand(request.user as Account)
    .then(result => escaping(result, request, response, StatusCodes.Success))
    .catch(error => onError(error, request, response));
}
