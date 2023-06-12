import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { Profile, ProfileProps } from "../model/profile";

export class CreateProfileUseCase {
  static async execute(input: ProfileProps): AsyncResult<string> {
    const profile = new Profile(input);

    const result = profile.validations(profile);

    if (result.ok === false) {
      return result;
    }

    return await ProfileRepository.create(profile);
  }
}
