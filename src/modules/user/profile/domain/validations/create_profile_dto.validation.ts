import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";
import { ProfileDTO } from "../dto/create_profile_dto";

function inputProfileValidation(input: ProfileDTO): Result<boolean> {
  if (input.profile === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Profile title input",
        "Profile title is undefined",
      ),
    );
  }
  if (input.description === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Profile description input",
        "Profile description is undefined",
      ),
    );
  }
  if (input.route === undefined) {
    return Failure(
      new BadRequestError(
        BaseErrorCodes.jsonValidation,
        "Profile route input",
        "Profile route is undefined",
      ),
    );
  }
  return Success(true);
}

export { inputProfileValidation };
