import { InputBase } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { DeleteAccountCommand } from "../../domain/command/delete_account_command";

class DeleteAccountController {
  constructor(
    private command: DeleteAccountCommand = new DeleteAccountCommand(),
  ) {}

  static getInstance(): DeleteAccountController {
    return new DeleteAccountController();
  }

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.query.id as string, request.user)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteAccountController };
