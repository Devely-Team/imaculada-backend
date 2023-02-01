import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account } from "../model/account";

class FindByIdAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(id: string): AsyncResult<Account> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdAccountUseCase = new FindByIdAccountUseCase(
  singletonAccountRepository,
);

export { FindByIdAccountUseCase, singletonFindByIdAccountUseCase };
