import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountRepository } from "../../infra/repositories/account_repository";

class DeleteAccountUseCase {
  static async execute(id: string): AsyncResult<boolean> {
    return await AccountRepository.delete(id);
  }
}

export { DeleteAccountUseCase };
