import { AsyncResult } from "../../../../../core/tools/result_type";
import { ProfileRepository } from "../../infra/repositories/profile_repository";

export class DeleteProfileUseCase {
  static async execute(id: string): AsyncResult<boolean> {
    return await ProfileRepository.delete(id);
  }
}
