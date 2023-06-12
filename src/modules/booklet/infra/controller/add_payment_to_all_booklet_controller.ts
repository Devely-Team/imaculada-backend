import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { AddPaymentToAllBookletCommand } from "../../domain/command/add_payment_to_all_booklet_command";
import { AddManyPaymentDTO } from "../../domain/dto/add_many_payment_dto";

class AddPaymentToAllBookletController {
  static async handler({
    request,
    response,
  }: Input<AddManyPaymentDTO>): Output {
    AddPaymentToAllBookletCommand.execute(
      request.query.code as string,
      request.body,
      request.user as Account,
    )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { AddPaymentToAllBookletController };
