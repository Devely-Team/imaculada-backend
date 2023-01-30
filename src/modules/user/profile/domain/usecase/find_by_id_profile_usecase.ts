import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { singletonProfileRepository } from "../../infra/repositories/profile_repository.instance";
import { Profile } from "../model/profile";

class FindByIdProfileUseCase {
  constructor(private repo: ProfileRepository) {}

  async execute(id: string): AsyncResult<Profile> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdProfileUseCase = new FindByIdProfileUseCase(
  singletonProfileRepository,
);

export { FindByIdProfileUseCase, singletonFindByIdProfileUseCase };
