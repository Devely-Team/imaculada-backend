import { Request } from "express";

import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";
import { AuthRequestDTO } from "../../domain/dto/auth_request_dto";

function decodedToken(request: Request): Result<AuthRequestDTO> {
  try {
    const authorization = request.headers.authorization as string;

    const token = authorization.split(" ")[1];

    // create a buffer
    const buff = Buffer.from(token, "base64");

    // decode buffer as UTF-8
    const str = buff.toString("utf-8");

    return Success({
      email: str.split(":")[0],
      password: str.split(":")[1],
    });
  } catch (error) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.genericError,
        "Erro na decodificação",
        "Decodificação dos dados basicoos do usuario",
      ),
    );
  }
}

export { decodedToken };
