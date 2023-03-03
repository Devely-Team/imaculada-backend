import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateBookletCommand } from "../../domain/command/update_booklet_command";
import { UpdateBookletDTO } from "../../domain/dto/update_booklet_dto";

class UpdateBookletController {
  constructor(private command: UpdateBookletCommand) {}

  async handler({ request, response }: Input<UpdateBookletDTO>): Output {
    this.command
      .execute(
        request.body,
        request.query.id as string,
        request.user as Account,
      )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateBookletController };
