import { FindByIdRoleUseCase } from "../usecase/find_by_id_role_usecase";

class FindbyIdRoleCommand {
  constructor(private usecase: FindByIdRoleUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyIdRoleCommand };
