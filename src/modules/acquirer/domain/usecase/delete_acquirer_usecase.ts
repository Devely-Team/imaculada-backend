import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { singletonAcquirerRepository } from "../../infra/repositories/acquirer_repository.instance";

class DeleteAcquirerUseCase {
  constructor(private repo: AcquirerReposity) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

const singletonDeleteAcquirerUseCase = new DeleteAcquirerUseCase(
  singletonAcquirerRepository,
);

export { DeleteAcquirerUseCase, singletonDeleteAcquirerUseCase };
