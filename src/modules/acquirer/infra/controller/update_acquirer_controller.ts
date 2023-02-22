import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { UpdateAcquirerCommand } from "../../domain/command/update_acquirer_command";
import { UpdateAcquirerDTO } from "../../domain/dto/update_acquirer_dto";

class UpdateAcquirerController {
  constructor(private command: UpdateAcquirerCommand) {}

  async handler({ request, response }: Input<UpdateAcquirerDTO>): Output {
    this.command
      .execute(request.body, request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateAcquirerController };
