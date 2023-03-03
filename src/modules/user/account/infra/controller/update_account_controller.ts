import { hasAccess } from "../../../../../core/tools/has_access";
import { Input } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { UpdateAccountCommand } from "../../domain/command/update_account_command";
import { UpdateAccountDTO } from "../../domain/dto/update_account_dto";

class UpdateAccountController {
  constructor(private command: UpdateAccountCommand) {}

  async handler({ request, response, next }: Input<UpdateAccountDTO>): Output {
    hasAccess(
      request,
      response,
      next,
      "dar_acesso",
      this.command
        .execute(request.body, request.query.id as string, request.id ?? "")
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "atualizar o usuario administrativo",
    );
  }
}

export { UpdateAccountController };
