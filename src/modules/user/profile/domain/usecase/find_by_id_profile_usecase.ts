import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { Profile } from "../model/profile";

export class FindByIdProfileUseCase {
  static async execute(id: string): AsyncResult<Profile> {
    return await ProfileRepository.findById(id);
  }
}
