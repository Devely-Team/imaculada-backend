import { hasAccess } from "../../../../../core/tools/has_access";
import { InputBase } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { DeleteAccountCommand } from "../../domain/command/delete_account_command";

class DeleteAccountController {
  constructor(private command: DeleteAccountCommand) {}

  async handler({ request, response }: InputBase): Output {
    hasAccess(
      request,
      response,
      "delete_user",
      this.command
        .execute(request.query.id as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "deletar usuario administrativo",
    );
  }
}

export { DeleteAccountController };
