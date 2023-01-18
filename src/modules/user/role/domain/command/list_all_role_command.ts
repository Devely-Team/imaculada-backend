import { ListRoleUseCase } from "../usecase/list_role_usecase";

class ListAllRoleCommand {
  constructor(private usecase: ListRoleUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllRoleCommand };
