import { RoleDTO } from "../dto/create_role_dto";
import { CreateRoleUseCase } from "../usecase/create_role_usecase";
import { inputRoleValidation } from "../validations/create_role_dto.validation";

class CreateRoleCommand {
  constructor(private usecase: CreateRoleUseCase) {}

  async execute(input: RoleDTO) {
    const result = inputRoleValidation(input);

    if (result.ok === false) {
      return result;
    }

    return await this.usecase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: input.description,
      role: input.role,
    });
  }
}

export { CreateRoleCommand };
