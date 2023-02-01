import { CreateAccountDTO } from "../dto/create_account_dto";
import { CreateAccountUseCase } from "../usecase/create_account_usecase";

class CreateAccountCommand {
  constructor(private usecase: CreateAccountUseCase) {}

  async execute(input: CreateAccountDTO) {
    // const result = inputAccountValidation(input);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.usecase.execute({
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
