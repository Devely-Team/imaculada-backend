import { AsyncResult } from "../../../../../core/tools/result_type";
import { singletonRoleRepository } from "../../infra/repositories/role_repoistory.instance";
import { RoleRepository } from "../../infra/repositories/role_repository";
import { Role } from "../model/role";

class ListRoleUseCase {
  constructor(private repo: RoleRepository) {}

  async execute(): AsyncResult<Role[]> {
    return await this.repo.listAll();
  }
}

const singletonListRoleUseCase = new ListRoleUseCase(singletonRoleRepository);

export { ListRoleUseCase, singletonListRoleUseCase };
