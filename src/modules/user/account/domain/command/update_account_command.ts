import { UpdateAccountDTO } from "../dto/update_account_dto";
import { UpdateAccountUseCase } from "../usecase/update_account_usecase";

class UpdateAccountCommand {
  constructor(private usecase: UpdateAccountUseCase) {}

  async execute(input: UpdateAccountDTO, id: string) {
    // const result = inputAccountValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

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
