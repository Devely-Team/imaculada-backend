import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { CreateAccountCommand } from "../../domain/command/create_account_command";
import { CreateAccountDTO } from "../../domain/dto/create_account_dto";

class CreateAccountController {
  constructor(private command: CreateAccountCommand) {}

  async handler({ request, response }: Input<CreateAccountDTO>): Output {
    this.command
      .execute(request.body)
      .then(result => escaping(result, request, response, StatusCodes.Created))
      .catch(error => onError(error, request, response));
  }
}

export { CreateAccountController };
