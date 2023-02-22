import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { singletonAcquirerRepository } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer } from "../model/acquirer";

class FindByNameAcquirerUseCase {
  constructor(private repo: AcquirerReposity) {}

  async execute(email: string): AsyncResult<Acquirer[]> {
    return await this.repo.findByName(email);
  }
}

const singletonFindByNameAcquirerUseCase = new FindByNameAcquirerUseCase(
  singletonAcquirerRepository,
);

export { FindByNameAcquirerUseCase, singletonFindByNameAcquirerUseCase };
