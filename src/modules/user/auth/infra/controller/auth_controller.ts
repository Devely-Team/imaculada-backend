import { InputBase } from "../../../../../core/tools/input_type";
import { escaping } from "../../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../../core/utils/http_status_code";
import { onError } from "../../../../../middleware/error/on_error";
import { authCommand } from "../../domain/command/auth_command";
import { AuthRequestDTO } from "../../domain/dto/auth_request_dto";

async function authController({ request, response }: InputBase) {
  const authorization = request.headers.authorization as string;
  console.log("authorization.split(' ')[1]: ", authorization.split(" ")[1]);
  console.log("token: ", authorization.split(" ")[1]);

  const token = authorization.split(" ")[1];

  // create a buffer
  const buff = Buffer.from(token, "base64");

  // decode buffer as UTF-8
  const str = buff.toString("utf-8");

  // print normal string
  console.log("Auth: ", str);

  const dto: AuthRequestDTO = {
    email: str.split(":")[0],
    password: str.split(":")[1],
  };

  return await authCommand(dto)
    .then(result => escaping(result, request, response, StatusCodes.Created))
    .catch(error => onError(error, request, response));
}

export { authController };
