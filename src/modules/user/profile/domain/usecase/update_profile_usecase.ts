import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { singletonProfileRepository } from "../../infra/repositories/profile_repository.instance";
import { Profile, ProfileProps } from "../model/profile";

class UpdateProfileUseCase {
  constructor(private repo: ProfileRepository) {}

  async execute(input: ProfileProps): AsyncResult<boolean> {
    const profile = new Profile(input);

    const result = profile.validations(profile);

    if (result.ok === false) {
      return result;
    }

    return await this.repo.update(profile);
  }
}

const singletonUpdateProfileUseCase = new UpdateProfileUseCase(
  singletonProfileRepository,
);

export { UpdateProfileUseCase, singletonUpdateProfileUseCase };
