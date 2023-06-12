import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { AccountProps } from "../model/account";

class UpdateAccountProfileUseCase {
  static async execute(input: AccountProps): AsyncResult<boolean> {
    return await AccountRepository.updateProfile(input.id, input.profile);
  }
}

export { UpdateAccountProfileUseCase };
