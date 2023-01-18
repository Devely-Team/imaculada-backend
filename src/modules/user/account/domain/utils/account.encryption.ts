import bcrypt from "bcrypt";

import { BaseError } from "../../../../../core/error/base_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";

function accountEncryption(password: string): AsyncResult<string> {
  return bcrypt
    .hash(password, 10)
    .then(hash => {
      return Success(hash);
    })
    .catch((error: BaseError) => {
      return Failure(error);
    });
}

export { accountEncryption };
