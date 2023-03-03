import { NextFunction, Request, Response } from "express";

import { onAccessDenied } from "../../middleware/error/on_error";
import { Account } from "../../modules/user/account/domain/model/account";

async function hasAccess<T>(
  request: Request,
  response: Response,
  next: NextFunction,
  profile: string,
  action: Promise<T>,
  access: string,
) {
  const usr = request.user as Account;
  const result = usr.profile.filter(e => e.profile === profile);
  console.log("profile: ", profile);
  console.log("usr.profile: ", result);
  console.log("Access message: ", access);
  if (result.length === 0) {
    return onAccessDenied(usr.username, access, request, response);
  }

  return await action;
}

export { hasAccess };
