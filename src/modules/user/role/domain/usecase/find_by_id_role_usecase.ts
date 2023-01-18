import { AsyncResult } from "../../../../../core/tools/result_type";
import { singletonRoleRepository } from "../../infra/repositories/role_repoistory.instance";
import { RoleRepository } from "../../infra/repositories/role_repository";
import { Role } from "../model/role";

class FindByIdRoleUseCase {
  constructor(private repo: RoleRepository) {}

  async execute(id: string): AsyncResult<Role> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdRoleUseCase = new FindByIdRoleUseCase(
  singletonRoleRepository,
);

export { FindByIdRoleUseCase, singletonFindByIdRoleUseCase };
