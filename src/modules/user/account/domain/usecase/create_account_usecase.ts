import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account, AccountProps } from "../model/account";

class CreateAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(input: AccountProps): AsyncResult<string> {
    const account = new Account(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.create(account);
  }
}

const singletonCreateAccountUseCase = new CreateAccountUseCase(
  singletonAccountRepository,
);

export { CreateAccountUseCase, singletonCreateAccountUseCase };
