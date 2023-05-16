import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateAccountProfileCommand } from "../../domain/command/update_account_profile_command";
import { UpdateAccountDTO } from "../../domain/dto/update_account_dto";

class UpdateAccountProfileController {
  constructor(
    private command: UpdateAccountProfileCommand = new UpdateAccountProfileCommand(),
  ) {}

  static getInstance(): UpdateAccountProfileController {
    return new UpdateAccountProfileController();
  }

  async handler({ request, response }: Input<UpdateAccountDTO>): Output {
    this.command
      .execute(
        request.body,
        request.query.id as string,
        request.id ?? "",
        request.user,
      )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateAccountProfileController };
