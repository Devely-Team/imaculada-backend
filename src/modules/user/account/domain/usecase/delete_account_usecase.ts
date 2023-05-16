import { databaseClientSingleton } from "../../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { AccountReposityInstance } from "../../infra/repositories/account_repository.instance";

class DeleteAccountUseCase {
  constructor(
    private repo: AccountReposity = new AccountReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

export { DeleteAccountUseCase };
