import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";
import { RoleDTO } from "../dto/create_role_dto";

function inputRoleValidation(input: RoleDTO): Result<boolean> {
  if (input.role === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Role title input",
        "Role title is undefined",
      ),
    );
  }
  if (input.description === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Role description input",
        "Role description is undefined",
      ),
    );
  }
  return Success(true);
}

export { inputRoleValidation };
