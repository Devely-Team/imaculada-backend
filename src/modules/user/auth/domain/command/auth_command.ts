import { NotFoundError } from "../../../../../core/error/not_found_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";
import { Encrypt } from "../../../../../core/utils/encrypt";
import { FindByEmailAccountUseCase } from "../../../account/domain/usecase/find_by_email_account_usecase";
import { createToken } from "../../infra/services/auth_create_token";
import { AuthRequestDTO } from "../dto/auth_request_dto";

async function authCommand(
  dto: AuthRequestDTO,
  usecase: FindByEmailAccountUseCase = new FindByEmailAccountUseCase(),
): AsyncResult<string> {
  const result = await usecase.execute(dto.email);

  if (result.ok === false || result.value === null) {
    return Failure(
      new NotFoundError(
        "Usuario não encontrado",
        "Usuario não encontrado pelo email",
      ),
    );
  }

  if (!result.value.isActive) {
    return Failure(
      new NotFoundError(
        "Usuario não esta ativo",
        "Verificar com administrativo sobre o usuario inativado",
      ),
    );
  }

  if (result.value.isResetPassword) {
    if (dto.password !== result.value.password) {
      return Failure(
        new NotFoundError(
          "Senha informada incorreta",
          "Senha do usuario informada está incorreto",
        ),
      );
    }
  } else {
    const comparePassword = await Encrypt.comparePassword(
      dto.password,
      result.value.password,
    );

    if (!comparePassword) {
      return Failure(
        new NotFoundError(
          "Senha informada incorreta",
          "Senha do usuario informada está incorreto",
        ),
      );
    }
  }

  return Success(createToken(result.value));
}

export { authCommand };
