import { InputBase } from "../../../../../core/tools/input_type";
import { Output } from "../../../../../core/tools/output_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { FindbyIdAccountCommand } from "../../domain/command/find_by_id_account_command";

class GetAccountController {
  constructor(
    private command: FindbyIdAccountCommand = new FindbyIdAccountCommand(),
  ) {}

  static getInstance(): GetAccountController {
    return new GetAccountController();
  }

  async handler({ request, response }: InputBase): Output {
    const { id } = request;

    this.command
      .execute(id ?? "")
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { GetAccountController };
