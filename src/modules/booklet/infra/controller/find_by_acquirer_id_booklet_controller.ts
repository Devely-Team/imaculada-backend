import { hasAccess } from "../../../../core/tools/has_access";
import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { FindbyAcquirerBookletCommand } from "../../domain/command/find_by_acquirer_booklet_command";

class FindByAcquirerBookletController {
  constructor(private command: FindbyAcquirerBookletCommand) {}

  async handler({ request, response, next }: InputBase): Output {
    hasAccess(
      request,
      response,
      next,
      "list_booklet",
      this.command
        .execute(request.query.acquirer as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "procurar pelo id do adquirente os carnês",
    );
  }
}

export { FindByAcquirerBookletController };
