import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { findbyCodeAcquirerCommand } from "../../domain/command/find_by_code_acquirer_command";

export async function findByCodeBookletAcquirerController({
  request,
  response,
}: InputBase): Output {
  findbyCodeAcquirerCommand(
    Number(request.query.code as string),
    request.user as Account,
  )
    .then(result => escaping(result, request, response, StatusCodes.Success))
    .catch(error => onError(error, request, response));
}
