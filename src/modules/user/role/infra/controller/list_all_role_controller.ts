import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { ListAllRoleCommand } from "../../domain/command/list_all_role_command";
import { RoleDTO } from "../../domain/dto/create_role_dto";

class ListAllRoleController {
  constructor(private command: ListAllRoleCommand) {}

  async handler({ request, response }: Input<RoleDTO>): Output {
    this.command
      .execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { ListAllRoleController };
