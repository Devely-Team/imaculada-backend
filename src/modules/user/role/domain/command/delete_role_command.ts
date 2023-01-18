import { DeleteRoleUseCase } from "../usecase/delete_role_usecase";

class DeleteRoleCommand {
  constructor(private usecase: DeleteRoleUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteRoleCommand };
