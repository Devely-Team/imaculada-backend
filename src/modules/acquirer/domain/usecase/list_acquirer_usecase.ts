import { databaseClientSingleton } from "../../../../core/prisma/prisma_client";
import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { AcquirerReposityInstance } from "../../infra/repositories/acquirer_repository.instance";
import { Acquirer } from "../model/acquirer";

class ListAcquirerUseCase {
  constructor(
    private repo: AcquirerReposity = new AcquirerReposityInstance(
      databaseClientSingleton,
    ),
  ) {}

  async execute(): AsyncResult<Acquirer[]> {
    return await this.repo.listAll();
  }
}

export { ListAcquirerUseCase };
