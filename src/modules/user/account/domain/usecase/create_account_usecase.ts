import { databaseClientSingleton } from "../../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { AccountReposityInstance } from "../../infra/repositories/account_repository.instance";
import { Account, AccountProps } from "../model/account";

class CreateAccountUseCase {
  constructor(
    private repo: AccountReposity = new AccountReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(input: AccountProps): AsyncResult<string> {
    const account = new Account(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.create(account);
  }
}

export { CreateAccountUseCase };
