import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { Account } from "../model/account";

class ListAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(): AsyncResult<Account[]> {
    return await this.repo.listAll();
  }
}

const singletonListAccountUseCase = new ListAccountUseCase(
  singletonAccountRepository,
);

export { ListAccountUseCase, singletonListAccountUseCase };
