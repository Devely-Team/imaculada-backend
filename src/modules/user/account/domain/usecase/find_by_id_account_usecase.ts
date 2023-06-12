import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { Account } from "../model/account";

class FindByIdAccountUseCase {
  static async execute(id: string): AsyncResult<Account> {
    return await AccountRepository.findById(id);
  }
}

export { FindByIdAccountUseCase };
