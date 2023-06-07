import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAllBooketUnPaydUseCase } from "../../domain/usecase/list_all_booklet_unpayd_usecase";

export class ListAllBooketUnPaydController {
  static async handler({ request, response }: InputBase): Output {
    ListAllBooketUnPaydUseCase.execute(Number(request.params.quota))
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}
