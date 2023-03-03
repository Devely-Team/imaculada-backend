import { hasAccess } from "../../../../core/tools/has_access";
import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { DeleteAcquirerCommand } from "../../domain/command/delete_acquirer_command";

class DeleteAcquirerController {
  constructor(private command: DeleteAcquirerCommand) {}

  async handler({ request, response, next }: InputBase): Output {
    hasAccess(
      request,
      response,
      next,
      "delete_purchaser",
      this.command
        .execute(request.query.id as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "deletar adquirente",
    );
  }
}

export { DeleteAcquirerController };
