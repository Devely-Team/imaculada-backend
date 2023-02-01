import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateAccountCommand } from "../../domain/command/update_account_command";
import { CreateAccountDTO } from "../../domain/dto/create_account_dto";

class UpdateAccountController {
  constructor(private command: UpdateAccountCommand) {}

  async handler({ request, response }: Input<CreateAccountDTO>): Output {
    this.command
      .execute(request.body, request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateAccountController };
