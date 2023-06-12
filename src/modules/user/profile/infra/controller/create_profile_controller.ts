import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { CreateProfileCommand } from "../../domain/command/create_profile_command";
import { ProfileDTO } from "../../domain/dto/create_profile_dto";

class CreateProfileController {
  static async handler({ request, response }: Input<ProfileDTO>): Output {
    CreateProfileCommand.execute(request.body)
      .then(result => escaping(result, request, response, StatusCodes.Created))
      .catch(error => onError(error, request, response));
  }
}

export { CreateProfileController };
