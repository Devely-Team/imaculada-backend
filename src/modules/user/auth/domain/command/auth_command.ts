import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";
import {
  FindByEmailAccountUseCase,
  singletonFindByEmailAccountUseCase,
} from "../../../account/domain/usecase/find_by_email_account_usecase";
import { createToken } from "../../infra/services/auth_create_token";
import { AuthRequestDTO } from "../dto/auth_request_dto";

async function authCommand(
  dto: AuthRequestDTO,
  usecase: FindByEmailAccountUseCase = singletonFindByEmailAccountUseCase,
): AsyncResult<string> {
  const result = await usecase.execute(dto.email);
  if (result.ok === false) {
    return Failure();
  }

  if (dto.password !== result.value.password) {
    return Failure();
  }

  return Success(createToken(result.value));
}

export { authCommand };
