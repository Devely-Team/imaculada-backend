import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { singletonProfileRepository } from "../../infra/repositories/profile_repository.instance";
import { Profile } from "../model/profile";

class ListProfileUseCase {
  constructor(private repo: ProfileRepository) {}

  async execute(): AsyncResult<Profile[]> {
    return await this.repo.listAll();
  }
}

const singletonListProfileUseCase = new ListProfileUseCase(
  singletonProfileRepository,
);

export { ListProfileUseCase, singletonListProfileUseCase };
