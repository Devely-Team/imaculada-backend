import { Input } from "../../../../../core/tools/input_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { authCommand } from "../../domain/command/auth_command";
import { AuthRequestDTO } from "../../domain/dto/auth_request_dto";

async function authController({ request, response }: Input<AuthRequestDTO>) {
  return await authCommand(request.body)
    .then(result => escaping(result, request, response, StatusCodes.Created))
    .catch(error => onError(error, request, response));
}

export { authController };
