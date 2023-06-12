import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { Account, AccountProps } from "../model/account";

class CreateAccountUseCase {
  static async execute(input: AccountProps): AsyncResult<string> {
    const account = new Account(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await AccountRepository.create(account);
  }
}

export { CreateAccountUseCase };
