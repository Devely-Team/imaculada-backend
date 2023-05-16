import { databaseClientSingleton } from "../../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../../core/tools/result_type";
import { Encrypt } from "../../../../../core/utils/encrypt";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { AccountReposityInstance } from "../../infra/repositories/account_repository.instance";
import { AccountProps } from "../model/account";

class UpdateAccountPasswordUseCase {
  constructor(
    private repo: AccountReposity = new AccountReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(input: AccountProps): AsyncResult<boolean> {
    const password = await Encrypt.cryptPassword(input.password);

    return await this.repo.updatePassword(input.id, password);
  }
}

export { UpdateAccountPasswordUseCase };
