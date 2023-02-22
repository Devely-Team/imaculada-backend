import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { singletonAcquirerRepository } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer, AcquirerProps } from "../model/acquirer";

class UpdateAcquirerUseCase {
  constructor(private repo: AcquirerReposity) {}

  async execute(input: AcquirerProps): AsyncResult<boolean> {
    const account = new Acquirer(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.update(account);
  }
}

const singletonUpdateAcquirerUseCase = new UpdateAcquirerUseCase(
  singletonAcquirerRepository,
);

export { UpdateAcquirerUseCase, singletonUpdateAcquirerUseCase };
