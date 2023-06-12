import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { AddBookletToAcquirerCommand } from "../../domain/command/add_booklet_to_acquirer_command";
import { UpdateBookletAcquirerDTO } from "../../domain/dto/update_acquirer_dto";

class AddBookletToAcquirerController {
  static async handler({
    request,
    response,
  }: Input<UpdateBookletAcquirerDTO>): Output {
    AddBookletToAcquirerCommand.execute(
      request.query.id as string,
      request.body,
      request.user as Account,
    )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { AddBookletToAcquirerController };
