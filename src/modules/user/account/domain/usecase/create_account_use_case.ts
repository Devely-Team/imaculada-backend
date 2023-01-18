import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account, AccountProps } from "../model/account_model";

class CreateAccountUseCase {
  constructor(private repo: AccountRepository) {}

  async execute(input: AccountProps): AsyncResult<string> {
    const account = new Account(input);
    const result = account.validations(account);

    if (result.ok === false) {
      return result;
    }

    return await this.repo.create(account);
  }
}

const singletonAccountUseCase = new CreateAccountUseCase(
  singletonAccountRepository,
);

export { CreateAccountUseCase, singletonAccountUseCase };
