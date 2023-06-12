import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateAccountPasswordCommand } from "../../domain/command/update_account_password_command";
import { UpdateAccountDTO } from "../../domain/dto/update_account_dto";

class UpdateAccountPasswordController {
  static async handler({ request, response }: Input<UpdateAccountDTO>): Output {
    UpdateAccountPasswordCommand.execute(
      request.body,
      request.query.id as string,
    )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateAccountPasswordController };
