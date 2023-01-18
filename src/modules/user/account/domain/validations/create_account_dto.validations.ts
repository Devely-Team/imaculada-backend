import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";
import { CreateAccountDTO } from "../dto/create_account_dto";

function inputAccountValidation(input: CreateAccountDTO): Result<boolean> {
  if (input.birthDay === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account birthday input",
        "Account birthday is undefined",
      ),
    );
  }

  if (input.email === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account email input",
        "Account email is undefined",
      ),
    );
  }

  if (input.name === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account name input",
        "Account name is undefined",
      ),
    );
  }

  if (input.password === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account password input",
        "Account password is undefined",
      ),
    );
  }

  if (input.roleId === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account roleId input",
        "Account roleId is undefined",
      ),
    );
  }

  if (input.userName === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Account userName input",
        "Account userName is undefined",
      ),
    );
  }

  return Success(true);
}

export { inputAccountValidation };
