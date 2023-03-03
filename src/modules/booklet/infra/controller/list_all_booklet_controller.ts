import { hasAccess } from "../../../../core/tools/has_access";
import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAllBookletCommand } from "../../domain/command/list_all_booklet_command";

class ListAllBookletController {
  constructor(private command: ListAllBookletCommand) {}

  async handler({ request, response }: InputBase): Output {
    hasAccess(
      request,
      response,
      "list_booklet",
      this.command
        .execute()
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "listar todos os carnês",
    );
  }
}

export { ListAllBookletController };
