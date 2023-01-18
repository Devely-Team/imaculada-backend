import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { CreateRoleCommand } from "../../domain/command/create_role_command";
import { RoleDTO } from "../../domain/dto/create_role_dto";

class CreateRoleController {
  constructor(private command: CreateRoleCommand) {}

  async handler({ request, response }: Input<RoleDTO>): Output {
    this.command
      .execute(request.body)
      .then(result => escaping(result, request, response, StatusCodes.Created))
      .catch(error => onError(error, request, response));
  }
}

export { CreateRoleController };
