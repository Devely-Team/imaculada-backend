import { hasAccess } from "../../../../core/tools/has_access";
import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { FindbyIdAcquirerCommand } from "../../domain/command/find_by_id_acquirer_command";

class FindByIdAcquirerController {
  constructor(private command: FindbyIdAcquirerCommand) {}

  async handler({ request, response, next }: InputBase): Output {
    hasAccess(
      request,
      response,
      next,
      "list_all_purchaser",
      this.command
        .execute(request.query.id as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "procurar por id do adquirente",
    );
  }
}

export { FindByIdAcquirerController };
