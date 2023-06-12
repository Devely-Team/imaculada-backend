import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { DeleteBookletPaymentCommand } from "../../../booklet_payment/domain/command/delete_booklet_payment_command";
import { Account } from "../../../user/account/domain/model/account";

class DeleteByCodeBookletPaymentController {
  static async handler({ request, response }: InputBase): Output {
    DeleteBookletPaymentCommand.execute(
      request.user as Account,
      request.query.id as string,
    )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteByCodeBookletPaymentController };
