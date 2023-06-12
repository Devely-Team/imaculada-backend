import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";
import { Account } from "../model/account";

class ListAccountUseCase {
  static async execute(): AsyncResult<Account[]> {
    return await AccountRepository.listAll();
  }
}

export { ListAccountUseCase };
