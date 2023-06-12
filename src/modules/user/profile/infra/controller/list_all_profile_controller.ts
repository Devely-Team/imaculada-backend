import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { ListAllProfileCommand } from "../../domain/command/list_all_profile_command";
import { ProfileDTO } from "../../domain/dto/create_profile_dto";

class ListAllProfileController {
  static async handler({ request, response }: Input<ProfileDTO>): Output {
    ListAllProfileCommand.execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { ListAllProfileController };
