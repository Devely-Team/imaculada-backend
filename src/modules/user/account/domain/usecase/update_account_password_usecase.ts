import { AsyncResult } from "../../../../../core/tools/result_type";
import { Encrypt } from "../../../../../core/utils/encrypt";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { AccountProps } from "../model/account";

class UpdateAccountPasswordUseCase {
  static async execute(input: AccountProps): AsyncResult<boolean> {
    const password = await Encrypt.cryptPassword(input.password);

    return await AccountRepository.updatePassword(input.id, password);
  }
}

export { UpdateAccountPasswordUseCase };
