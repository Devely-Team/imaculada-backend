import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { CreateSingleBookletDTO } from "../../domain/dto/create_single_booklet_dto";
import { CreateSingleBookletUseCase } from "../../domain/usecase/create_single_booklet_usecase";

export class CreateSingleBookletController {
  static async handler({
    request,
    response,
  }: Input<CreateSingleBookletDTO>): Output {
    CreateSingleBookletUseCase.execute(request.body)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}
