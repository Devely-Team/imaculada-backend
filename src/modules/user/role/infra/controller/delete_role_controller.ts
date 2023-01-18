import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { DeleteRoleCommand } from "../../domain/command/delete_role_command";
import { RoleDTO } from "../../domain/dto/create_role_dto";

class DeleteRoleController {
  constructor(private command: DeleteRoleCommand) {}

  async handler({ request, response }: Input<RoleDTO>): Output {
    this.command
      .execute(request.query.id)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteRoleController };
