import { RoleDTO } from "../dto/create_role_dto";
import { UpdateRoleUseCase } from "../usecase/update_role_usecase";
import { inputRoleValidation } from "../validations/create_role_dto.validation";

class UpdateRoleCommand {
  constructor(private usecase: UpdateRoleUseCase) {}

  async execute(input: RoleDTO, id: string) {
    const result = inputRoleValidation(input);

    if (result.ok === false) {
      return result;
    }

    return await this.usecase.execute({
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      description: input.description,
      role: input.role,
    });
  }
}

export { UpdateRoleCommand };
