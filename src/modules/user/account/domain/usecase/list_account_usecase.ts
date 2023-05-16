import { databaseClientSingleton } from "../../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { AccountReposityInstance } from "../../infra/repositories/account_repository.instance";
import { Account } from "../model/account";

class ListAccountUseCase {
  constructor(
    private repo: AccountReposity = new AccountReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(): AsyncResult<Account[]> {
    return await this.repo.listAll();
  }
}

export { ListAccountUseCase };
