import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateProfileCommand } from "../../domain/command/update_profile_command";
import { ProfileDTO } from "../../domain/dto/create_profile_dto";

class UpdateProfileController {
  constructor(private command: UpdateProfileCommand) {}

  async handler({ request, response }: Input<ProfileDTO>): Output {
    this.command
      .execute(request.body, request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateProfileController };
