// GetBookletDoesntExistController

import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { GetBookletDoesntExistUseCase } from "../../domain/usecase/find_booklet_dosnt_exist_usecase";

export class GetBookletDoesntExistController {
  static async handler({ request, response }: InputBase): Output {
    GetBookletDoesntExistUseCase.execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}
