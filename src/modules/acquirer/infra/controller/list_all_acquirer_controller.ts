import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAllAcquirerCommand } from "../../domain/command/list_all_acquirer_command";

class ListAllAcquirerController {
  constructor(private command: ListAllAcquirerCommand) {}

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { ListAllAcquirerController };
