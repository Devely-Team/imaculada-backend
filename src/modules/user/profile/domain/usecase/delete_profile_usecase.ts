import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { singletonProfileRepository } from "../../infra/repositories/profile_repository.instance";

class DeleteProfileUseCase {
  constructor(private repo: ProfileRepository) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

const singletonDeleteProfileUseCase = new DeleteProfileUseCase(
  singletonProfileRepository,
);

export { DeleteProfileUseCase, singletonDeleteProfileUseCase };
