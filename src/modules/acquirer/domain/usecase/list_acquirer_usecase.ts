import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { Acquirer } from "../model/acquirer";

class ListAcquirerUseCase {
  static async execute(): AsyncResult<Acquirer[]> {
    return await AcquirerReposity.listAll();
  }
}

export { ListAcquirerUseCase };
