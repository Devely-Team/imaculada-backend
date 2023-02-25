import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { singletonAcquirerRepository } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer } from "../model/acquirer";

class FindByIdAcquirerUseCase {
  constructor(private repo: AcquirerReposity) {}

  async execute(id: string): AsyncResult<Acquirer> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdAcquirerUseCase = new FindByIdAcquirerUseCase(
  singletonAcquirerRepository,
);

export { FindByIdAcquirerUseCase, singletonFindByIdAcquirerUseCase };
