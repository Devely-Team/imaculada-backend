import { hasAccess } from "../../../../core/tools/has_access";
import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { DeleteByCodeBookletCommand } from "../../domain/command/delete_by_code_booklet_command";

class DeleteByCodeBookletController {
  constructor(private command: DeleteByCodeBookletCommand) {}

  async handler({ request, response }: InputBase): Output {
    hasAccess(
      request,
      response,
      "delete_booklet",
      this.command
        .execute(Number(request.query.code))
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "deletar pelo numero do carnê os carnês",
    );
  }
}

export { DeleteByCodeBookletController };
