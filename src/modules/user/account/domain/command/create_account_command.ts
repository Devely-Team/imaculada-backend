import { hasAccess } from "../../../../../core/tools/has_access";
import { CreateAccountDTO } from "../dto/create_account_dto";
import { Account } from "../model/account";
import { CreateAccountUseCase } from "../usecase/create_account_usecase";

class CreateAccountCommand {
  static async execute(input: CreateAccountDTO, user: Account) {
    const accessDenied = hasAccess(
      user,
      "criar_usuario",
      "criar novos usuarios administrativos.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    // const result = inputAccountValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    return await CreateAccountUseCase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      email: input.email,
      username: input.username,
      isActive: true,
      isResetPassword: true,
      password: input.password,
      phone: input.phone,
      profile: input.profile,
    });
  }
}

export { CreateAccountCommand };
