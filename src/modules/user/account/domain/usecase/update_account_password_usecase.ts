import { AsyncResult } from "../../../../../core/tools/result_type";
import { Encrypt } from "../../../../../core/utils/encrypt";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { AccountProps } from "../model/account";

class UpdateAccountPasswordUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(input: AccountProps): AsyncResult<boolean> {
    const password = await Encrypt.cryptPassword(input.password);

    return await this.repo.updatePassword(input.id, password);
  }
}

const singletonUpdateAccountPasswordUseCase = new UpdateAccountPasswordUseCase(
  singletonAccountRepository,
);

export { UpdateAccountPasswordUseCase, singletonUpdateAccountPasswordUseCase };
