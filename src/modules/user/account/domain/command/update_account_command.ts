import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import { hasAccess } from "../../../../../core/tools/has_access";
import { Failure } from "../../../../../core/tools/result_type";
import { UpdateAccountDTO } from "../dto/update_account_dto";
import { Account } from "../model/account";
import { UpdateAccountUseCase } from "../usecase/update_account_usecase";

class UpdateAccountCommand {
  constructor(private usecase: UpdateAccountUseCase) {}

  async execute(
    input: UpdateAccountDTO,
    id: string,
    tokenId: string,
    user: Account,
  ) {
    const accessDenied = hasAccess(
      user,
      "dar_acesso",
      "atualizar usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    // const result = inputAccountValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    if (tokenId === "") {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Recuperar o id apartir do token.",
          "Erro no fluxo de recuperar o id a partir do token.",
        ),
      );
    }

    if (tokenId === id) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Usuario não pode ser dar o acesso",
          "Voce não pode ser conceder o acesso, favor solicitar para outro usuario",
        ),
      );
    }

    return await this.usecase.execute({
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: input.email,
      username: input.username,
      isActive: input.isActive,
      isResetPassword: input.isResetPassword,
      password: input.password,
      phone: input.phone,
      profile: input.profile,
    });
  }
}

export { UpdateAccountCommand };
