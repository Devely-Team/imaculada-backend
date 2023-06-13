import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { createAcquirerCommand } from "../../domain/command/create_acquirer_command";
import { CreateAcquirerDTO } from "../../domain/dto/create_acquirer_dto";

export async function createAcquirerController({
  request,
  response,
}: Input<CreateAcquirerDTO>): Output {
  createAcquirerCommand(request.body, request.user as Account)
    .then(result => escaping(result, request, response, StatusCodes.Created))
    .catch(error => onError(error, request, response));
}
