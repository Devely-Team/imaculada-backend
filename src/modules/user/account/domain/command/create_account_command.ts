import { CreateAccountDTO } from "../dto/create_account_dto";
import { CreateAccountUseCase } from "../usecase/create_account_use_case";
import { accountEncryption } from "../utils/account.encryption";
import { inputAccountValidation } from "../validations/create_account_dto.validations";

class CreateAccountCommand {
  constructor(private usecase: CreateAccountUseCase) {}

  async execute(input: CreateAccountDTO) {
    const result = inputAccountValidation(input);

    if (result.ok === false) {
      return result;
    }

    const resPassword = await accountEncryption(input.password);
    if (resPassword.ok) {
      input.password = resPassword.value;
    }

    return await this.usecase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      birthDay: input.birthDay,
      email: input.email,
      name: input.name,
      password: input.password,
      roleId: input.roleId,
      userName: input.userName,
    });
  }
}

export { CreateAccountCommand };
