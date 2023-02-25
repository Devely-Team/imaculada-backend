import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { singletonAcquirerRepository } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer } from "../model/acquirer";

class ListAcquirerUseCase {
  constructor(private repo: AcquirerReposity) {}

  async execute(): AsyncResult<Acquirer[]> {
    return await this.repo.listAll();
  }
}

const singletonListAcquirerUseCase = new ListAcquirerUseCase(
  singletonAcquirerRepository,
);

export { ListAcquirerUseCase, singletonListAcquirerUseCase };
