import { AsyncResult } from "../../../../../core/tools/result_type";
import { AccountReposity } from "../../infra/repositories/account_repository";
import { singletonAccountRepository } from "../../infra/repositories/account_repository.instance";
import { AccountProps } from "../model/account";

class UpdateAccountProfileUseCase {
  constructor(private repo: AccountReposity) {}

  async execute(input: AccountProps): AsyncResult<boolean> {
    return await this.repo.updateProfile(input.id, input.profile);
  }
}

const singletonUpdateAccountProfileUseCase = new UpdateAccountProfileUseCase(
  singletonAccountRepository,
);

export { UpdateAccountProfileUseCase, singletonUpdateAccountProfileUseCase };
