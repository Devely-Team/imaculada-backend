import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { CreateBookletPaymentDTO } from "../../../booklet_payment/domain/dto/booklet_payment_dto";
import { Account } from "../../../user/account/domain/model/account";
import { AddPaymentToBookletCommand } from "../../domain/command/add_payment_to_booklet_command";

class UpdateBookletController {
  constructor(private command: AddPaymentToBookletCommand) {}

  async handler({ request, response }: Input<CreateBookletPaymentDTO>): Output {
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
