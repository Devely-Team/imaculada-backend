import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { Account } from "../model/account";

class FindByEmailAccountUseCase {
  static async execute(email: string): AsyncResult<Account> {
    return await AccountRepository.findByEmail(email);
  }
}

export { FindByEmailAccountUseCase };
