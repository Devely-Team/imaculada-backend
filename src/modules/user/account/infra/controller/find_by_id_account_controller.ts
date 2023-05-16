import { InputBase } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { FindbyIdAccountCommand } from "../../domain/command/find_by_id_account_command";

class FindByIdAccountController {
  constructor(
    private command: FindbyIdAccountCommand = new FindbyIdAccountCommand(),
  ) {}

  static getInstance(): FindByIdAccountController {
    return new FindByIdAccountController();
  }

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { FindByIdAccountController };
