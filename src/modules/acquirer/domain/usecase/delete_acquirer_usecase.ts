import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { AcquirerReposityInstance } from "../../infra/repositories/acquirer_repository.instance";

class DeleteAcquirerUseCase {
  constructor(
    private repo: AcquirerReposity = new AcquirerReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(id: string): AsyncResult<boolean> {
    return await this.repo.delete(id);
  }
}

export { DeleteAcquirerUseCase };
