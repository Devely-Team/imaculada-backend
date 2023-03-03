import { hasAccess } from "../../../../core/tools/has_access";
import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { CreateAcquirerCommand } from "../../domain/command/create_acquirer_command";
import { CreateAcquirerDTO } from "../../domain/dto/create_acquirer_dto";

class CreateAcquirerController {
  constructor(private command: CreateAcquirerCommand) {}

  async handler({ request, response, next }: Input<CreateAcquirerDTO>): Output {
    hasAccess(
      request,
      response,
      next,
      "create_purchaser",
      this.command
        .execute(request.body)
        .then(result =>
          escaping(result, request, response, StatusCodes.Created),
        )
        .catch(error => onError(error, request, response)),
      "criar adquirente",
    );
  }
}

export { CreateAcquirerController };
