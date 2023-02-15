import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account, AccountProps } from "../model/account";

class UpdateAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(input: AccountProps): AsyncResult<boolean> {
    const account = new Account(input);

    if (account.profile.length === 0) {
      await this.repo.updateDisconnect(account);
    } else {
      await this.repo.updateConnect(account);
    }

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.update(account);
  }
}

const singletonUpdateAccountUseCase = new UpdateAccountUseCase(
  singletonAccountRepository,
);

export { UpdateAccountUseCase, singletonUpdateAccountUseCase };
