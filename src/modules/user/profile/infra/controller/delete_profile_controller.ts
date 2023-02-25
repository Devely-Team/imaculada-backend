import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { DeleteProfileCommand } from "../../domain/command/delete_profile_command";
import { ProfileDTO } from "../../domain/dto/create_profile_dto";

class DeleteProfileController {
  constructor(private command: DeleteProfileCommand) {}

  async handler({ request, response }: Input<ProfileDTO>): Output {
    this.command
      .execute(request.query.id)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteProfileController };
