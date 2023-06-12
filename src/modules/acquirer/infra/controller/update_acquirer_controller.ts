import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateAcquirerCommand } from "../../domain/command/update_acquirer_command";
import { UpdateAcquirerDTO } from "../../domain/dto/update_acquirer_dto";

class UpdateAcquirerController {
  static async handler({
    request,
    response,
  }: Input<UpdateAcquirerDTO>): Output {
    UpdateAcquirerCommand.execute(
      request.body,
      request.query.id as string,
      request.user as Account,
    )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateAcquirerController };
