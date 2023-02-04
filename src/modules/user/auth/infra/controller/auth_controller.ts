import { InputBase } from "../../../../../core/tools/input_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { authCommand } from "../../domain/command/auth_command";
import { decodedToken } from "../services/auth_decoded_basic";

async function authController({ request, response }: InputBase) {
  const result = decodedToken(request);

  if (result.ok === false || result.value === null) {
    return result;
  }

  return await authCommand(result.value)
    .then(result => escaping(result, request, response, StatusCodes.Created))
    .catch(error => onError(error, request, response));
}

export { authController };
