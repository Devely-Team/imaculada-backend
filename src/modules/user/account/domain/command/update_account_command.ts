import { CreateAccountDTO } from "../dto/create_account_dto";
import { UpdateAccountUseCase } from "../usecase/update_account_usecase";

class UpdateAccountCommand {
  constructor(private usecase: UpdateAccountUseCase) {}

  async execute(input: CreateAccountDTO, id: string) {
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
      isActive: true,
      isResetPassword: true,
      password: input.password,
      phone: input.phone,
      profile: input.profile,
    });
  }
}

export { UpdateAccountCommand };
