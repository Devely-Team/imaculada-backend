import { hasAccess } from "../../../../../core/tools/has_access";
import { InputBase } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { ListAllAccountCommand } from "../../domain/command/list_all_account_command";

class ListAllAccountController {
  constructor(private command: ListAllAccountCommand) {}

  async handler({ request, response }: InputBase): Output {
    hasAccess(
      request,
      response,
      "list_all_usuarios",
      this.command
        .execute()
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "listar todos os usuario administrativo",
    );
  }
}

export { ListAllAccountController };
