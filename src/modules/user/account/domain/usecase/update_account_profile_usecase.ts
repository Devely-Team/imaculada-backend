import { databaseClientSingleton } from "../../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { AccountReposityInstance } from "../../infra/repositories/account_repository.instance";
import { AccountProps } from "../model/account";

class UpdateAccountProfileUseCase {
  constructor(
    private repo: AccountReposity = new AccountReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(input: AccountProps): AsyncResult<boolean> {
    return await this.repo.updateProfile(input.id, input.profile);
  }
}

export { UpdateAccountProfileUseCase };
