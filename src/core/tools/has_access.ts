import { Account } from "../../modules/user/account/domain/model/account";
import { AccessDeniedRequestError } from "../error/not_access_request_error";
import { Failure, Success } from "./result_type";

function hasAccess(user: Account, profile: string, access: string) {
  const result = user.profile.filter(e => e.profile === profile);

  if (result.length === 0) {
    return Failure(
      new AccessDeniedRequestError(
        `Usuario: ${user.username} não tem acesso para ${access}`,
      ),
    );
  }

  return Success(true);
}

export { hasAccess };
