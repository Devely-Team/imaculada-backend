import { NextFunction, Request, Response } from "express";

import {
  onAccessDenied,
  userDecodedError,
} from "../../middleware/error/on_error";
import { Account } from "../../modules/user/account/domain/model/account";

function hasAccess<T>(
  request: Request,
  response: Response,
  next: NextFunction,
  profile: string,
  action: Promise<T>,
  access: string,
) {
  const { user } = request;

  if (user as Account) {
    const usr = user as Account;
    const result = usr.profile.filter(e => e.profile === profile);
    if (result.length > 0) {
      Promise.resolve(action);
    } else {
      onAccessDenied(usr.username, access, request, response);
    }
  } else {
    userDecodedError(request, response);
  }
  next();
}

export { hasAccess };
