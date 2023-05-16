import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { AcquirerReposityInstance } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer, AcquirerProps } from "../model/acquirer";

class CreateAcquirerUseCase {
  constructor(
    private repo: AcquirerReposity = new AcquirerReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(input: AcquirerProps): AsyncResult<string> {
    const account = new Acquirer(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.create(account);
  }
}

export { CreateAcquirerUseCase };
