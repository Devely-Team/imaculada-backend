import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";

class DeleteAccountUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

const singletonDeleteAccountUseCase = new DeleteAccountUseCase(
  singletonAccountRepository,
);

export { DeleteAccountUseCase, singletonDeleteAccountUseCase };
