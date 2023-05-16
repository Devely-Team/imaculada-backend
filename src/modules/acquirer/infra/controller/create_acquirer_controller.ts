import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { CreateAcquirerCommand } from "../../domain/command/create_acquirer_command";
import { CreateAcquirerDTO } from "../../domain/dto/create_acquirer_dto";

class CreateAcquirerController {
  constructor(
    private command: CreateAcquirerCommand = new CreateAcquirerCommand(),
  ) {}

  static getInstance(): CreateAcquirerController {
    return new CreateAcquirerController();
  }

  async handler({ request, response }: Input<CreateAcquirerDTO>): Output {
    this.command
      .execute(request.body, request.user as Account)
      .then(result => escaping(result, request, response, StatusCodes.Created))
      .catch(error => onError(error, request, response));
  }
}

export { CreateAcquirerController };
