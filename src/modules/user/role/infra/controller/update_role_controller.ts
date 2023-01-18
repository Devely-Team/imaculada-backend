import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateRoleCommand } from "../../domain/command/update_role_command";
import { RoleDTO } from "../../domain/dto/create_role_dto";

class UpdateRoleController {
  constructor(private command: UpdateRoleCommand) {}

  async handler({ request, response }: Input<RoleDTO>): Output {
    this.command
      .execute(request.body, request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateRoleController };
