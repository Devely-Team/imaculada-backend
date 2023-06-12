import { UpdateAccountDTO } from "../dto/update_account_dto";
import { UpdateAccountPasswordUseCase } from "../usecase/update_account_password_usecase";

class UpdateAccountPasswordCommand {
  static async execute(input: UpdateAccountDTO, id: string) {
    // const result = inputAccountValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    return await UpdateAccountPasswordUseCase.execute({
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

export { UpdateAccountPasswordCommand };
