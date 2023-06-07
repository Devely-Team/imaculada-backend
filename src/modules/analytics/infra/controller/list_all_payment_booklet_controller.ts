import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAllPaymentBookletUseCase } from "../../domain/usecase/list_all_payment_booklet_usecase";

export class ListAllPaymentBookletController {
  static async handler({ request, response }: InputBase): Output {
    ListAllPaymentBookletUseCase.execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}
