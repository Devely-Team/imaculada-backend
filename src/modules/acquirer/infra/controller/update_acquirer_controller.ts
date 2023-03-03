import { hasAccess } from "../../../../core/tools/has_access";
import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { UpdateAcquirerCommand } from "../../domain/command/update_acquirer_command";
import { UpdateAcquirerDTO } from "../../domain/dto/update_acquirer_dto";

class UpdateAcquirerController {
  constructor(private command: UpdateAcquirerCommand) {}

  async handler({ request, response, next }: Input<UpdateAcquirerDTO>): Output {
    hasAccess(
      request,
      response,
      next,
      "update_purchaser",
      this.command
        .execute(request.body, request.query.id as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "atualizar os adquirente",
    );
  }
}

export { UpdateAcquirerController };
