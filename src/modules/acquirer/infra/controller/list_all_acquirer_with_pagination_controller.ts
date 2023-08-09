import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { listAllAcquirerWithPaginationCommand } from "../../domain/command/list_all_acquirer_with_pagination_command";

export async function listAllAcquirerWithPaginationController({
  request,
  response,
}: InputBase): Output {
  listAllAcquirerWithPaginationCommand(
    request.user as Account,
    Number(request.query.page),
  )
    .then(result => escaping(result, request, response, StatusCodes.Success))
    .catch(error => onError(error, request, response));
}
