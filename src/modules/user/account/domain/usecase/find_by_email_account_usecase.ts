import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account } from "../model/account";

class FindByEmailAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(email: string): AsyncResult<Account> {
    return await this.repo.findByEmail(email);
  }
}

const singletonFindByEmailAccountUseCase = new FindByEmailAccountUseCase(
  singletonAccountRepository,
);

export { FindByEmailAccountUseCase, singletonFindByEmailAccountUseCase };
