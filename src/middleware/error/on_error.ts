import { Request, Response } from "express";

import { BadRequestError } from "../../core/error/bad_request_error";
import { BaseError, BaseErrorCodes } from "../../core/error/base_error";
import { genericError } from "../../core/error/generic_error";
import { AccessDeniedRequestError } from "../../core/error/not_access_request_error";
import { handlingError } from "./error_handler";

function onError(
  err: {
    ok: false;
    error: BaseError | undefined;
  },
  request: Request,
  response: Response,
) {
  handlingError(
    err.error !== undefined ? err.error : genericError,
    request,
    response,
  );
}

function userDecodedError(request: Request, response: Response) {
  onError(
    {
      ok: false,
      error: new BadRequestError(
        BaseErrorCodes.objectValidation,
        "Erro no parse do objeto user",
        "Erro no parse do objeto user",
      ),
    },
    request,
    response,
  );
}

function onAccessDenied(
  username: string,
  action: string,
  request: Request,
  response: Response,
) {
  onError(
    {
      ok: false,
      error: new AccessDeniedRequestError(
        `Usuario: ${username} não tem acesso para ${action}`,
      ),
    },
    request,
    response,
  );
}

export { onError, userDecodedError, onAccessDenied };
