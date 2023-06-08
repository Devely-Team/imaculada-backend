import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAnalitycsUseCase } from "../../domain/usecase/list_analitycs_usecase";

export class AnalitycsCountedController {
  static async handler({ request, response }: InputBase): Output {
    ListAnalitycsUseCase.execute(Number(request.query.quota))
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}
