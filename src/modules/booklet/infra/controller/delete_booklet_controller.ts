import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { DeleteBookletCommand } from "../../domain/command/delete_booklet_command";

class DeleteBookletController {
  constructor(private command: DeleteBookletCommand) {}

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteBookletController };
