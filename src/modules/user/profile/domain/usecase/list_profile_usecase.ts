import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";
import { Profile } from "../model/profile";

export class ListProfileUseCase {
  static async execute(): AsyncResult<Profile[]> {
    return await ProfileRepository.listAll();
  }
}
