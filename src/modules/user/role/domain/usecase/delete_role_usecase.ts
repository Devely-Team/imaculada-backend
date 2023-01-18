import { AsyncResult } from "../../../../../core/tools/result_type";
import { singletonRoleRepository } from "../../infra/repositories/role_repoistory.instance";
import { RoleRepository } from "../../infra/repositories/role_repository";

class DeleteRoleUseCase {
  constructor(private repo: RoleRepository) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

const singletonDeleteRoleUseCase = new DeleteRoleUseCase(
  singletonRoleRepository,
);

export { DeleteRoleUseCase, singletonDeleteRoleUseCase };
