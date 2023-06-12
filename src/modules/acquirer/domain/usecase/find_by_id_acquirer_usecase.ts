import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { Acquirer } from "../model/acquirer";

class FindByIdAcquirerUseCase {
  static async execute(id: string): AsyncResult<Acquirer> {
    return await AcquirerReposity.findById(id);
  }
}

export { FindByIdAcquirerUseCase };
