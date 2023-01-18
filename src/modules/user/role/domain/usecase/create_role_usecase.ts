import { AsyncResult } from "../../../../../core/tools/result_type";
import { singletonRoleRepository } from "../../infra/repositories/role_repoistory.instance";
import { RoleRepository } from "../../infra/repositories/role_repository";
import { Role, RoleProps } from "../model/role";

class CreateRoleUseCase {
  constructor(private repo: RoleRepository) {}

  async execute(input: RoleProps): AsyncResult<string> {
    const role = new Role(input);

    const result = role.validations(role);

    if (result.ok === false) {
      return result;
    }

    return await this.repo.create(role);
  }
}

const singletonCreateRoleUseCase = new CreateRoleUseCase(
  singletonRoleRepository,
);

export { CreateRoleUseCase, singletonCreateRoleUseCase };
